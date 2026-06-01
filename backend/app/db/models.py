"""
StyleHub — Modèle de données SQLAlchemy
Prêt pour migration Alembic
Basé sur le MCD (images fournies)
"""

import enum

from sqlalchemy import (
    UUID,
    Boolean,
    Column,
    DateTime,
    Enum,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
    text,
)
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()


# ─────────────────────────────────────────
# Enums
# ─────────────────────────────────────────

class UserRole(enum.Enum):
    CLIENT  = "CLIENT"
    STYLIST = "STYLIST"   # couturier / styliste


class OrderStatus(enum.Enum):
    PENDING   = "PENDING"
    PAID      = "PAID"
    SHIPPED   = "SHIPPED"
    DELIVERED = "DELIVERED"
    CANCELLED = "CANCELLED"


class AppointmentStatus(enum.Enum):
    PENDING   = "PENDING"
    CONFIRMED = "CONFIRMED"
    CANCELLED = "CANCELLED"


# ─────────────────────────────────────────
# PROFILE
# ─────────────────────────────────────────

class Profile(Base):
    __tablename__ = "profile"

    profile_id       = Column(UUID, primary_key=True, index=True)
    profile_email    = Column(String(255), nullable=False, unique=True)
    profile_password = Column(String(255), nullable=False)
    profile_name      = Column(String(100), nullable=False)
    profile_firstname = Column(String(100), nullable=True)
    profile_avatar    = Column(String(500), nullable=True)   # URL Cloudinary
    profile_role     = Column(Enum(UserRole), nullable=False, default=UserRole.CLIENT)
    created_at    = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# STYLIST  (couturier / styliste)
# ─────────────────────────────────────────

class Stylist(Base):
    __tablename__ = "stylist"

    sty_id        = Column(Integer, primary_key=True, index=True)
    # FK vers PROFILE  (1,1 — 0,1 : un profile peut être ou non un stylist)
    profile_id       = Column(
        UUID,
        ForeignKey("profile.profile_id", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False,
        unique=True,
    )
    sty_bio       = Column(Text, nullable=True)
    created_at    = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# CATEGORY
# ─────────────────────────────────────────

class Category(Base):
    __tablename__ = "category"

    cat_id          = Column(Integer, primary_key=True, index=True)
    cat_nom         = Column(String(100), nullable=False, unique=True)
    cat_description = Column(Text, nullable=True)
    created_at      = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# PRODUCT
# ─────────────────────────────────────────

class Product(Base):
    __tablename__ = "product"

    product_id      = Column(Integer, primary_key=True, index=True)
    # FK vers STYLIST  (0,n — 1,1 : un produit appartient à exactement 1 stylist)
    sty_id          = Column(
        Integer,
        ForeignKey("stylist.sty_id", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False,
    )
    # FK vers CATEGORY  (1,n — 1,1 : un produit appartient à exactement 1 catégorie)
    cat_id          = Column(
        Integer,
        ForeignKey("category.cat_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
    )
    product_name    = Column(String(200), nullable=False)
    product_price   = Column(Float, nullable=False)
    product_stock   = Column(Integer, nullable=False, default=0, server_default=text("0"))
    product_tailles = Column(ARRAY(String), nullable=False, default=list)
    product_images  = Column(ARRAY(String), nullable=False, default=list)
    created_at      = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# ORDER  (CMD)
# ─────────────────────────────────────────

class Order(Base):
    __tablename__ = "order"

    order_id     = Column(Integer, primary_key=True, index=True)
    # FK vers USER  (1,1 — 0,n : un user passe 0 ou plusieurs commandes)
    profile_id      = Column(
        UUID,
        ForeignKey("profile.profile_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
    )
    order_status = Column(
        Enum(OrderStatus), nullable=False, default=OrderStatus.PENDING
    )
    order_price  = Column(Float, nullable=False)
    created_at   = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# CMD_PRODUCT  (ORDER ↔ PRODUCT)
# Table d'association avec attributs propres : qté et prix unitaire
# ─────────────────────────────────────────

class CmdProduct(Base):
    __tablename__ = "cmd_product"

    cmd_prod_id  = Column(Integer, primary_key=True, index=True)
    # FK vers ORDER
    order_id     = Column(
        Integer,
        ForeignKey("order.order_id", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False,
    )
    # FK vers PRODUCT
    product_id   = Column(
        Integer,
        ForeignKey("product.product_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
    )
    cmd_prod_qte = Column(Integer, nullable=False, default=1)
    cmd_prod_pu  = Column(Float, nullable=False)   # prix unitaire au moment de la commande
    created_at   = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# CRENEAU
# ─────────────────────────────────────────

class Creneau(Base):
    __tablename__ = "creneau"

    cre_id          = Column(Integer, primary_key=True, index=True)
    # FK vers STYLIST  (0,n — 1,1 : un créneau appartient à 1 stylist)
    sty_id          = Column(
        Integer,
        ForeignKey("stylist.sty_id", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False,
    )
    cre_debut       = Column(DateTime(timezone=True), nullable=False)
    cre_fin         = Column(DateTime(timezone=True), nullable=False)
    cre_est_reserve = Column(Boolean, nullable=False, default=False, server_default=text("false"))
    created_at      = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# APPOINTMENT  (RDV)
# ─────────────────────────────────────────

class Appointment(Base):
    __tablename__ = "appointment"

    appointment_id  = Column(Integer, primary_key=True, index=True)
    # FK vers USER  (1,1 — 0,n : un user peut avoir 0 ou plusieurs RDV)
    profile_id         = Column(
        UUID,
        ForeignKey("profile.profile_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
    )
    # FK vers CRENEAU  (0,1 — 1,1 : un RDV occupe exactement 1 créneau)
    cre_id          = Column(
        Integer,
        ForeignKey("creneau.cre_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
        unique=True,   # garantit la cardinalité 0,1 côté créneau
    )
    app_note        = Column(Text, nullable=True)
    app_status      = Column(
        Enum(AppointmentStatus), nullable=False, default=AppointmentStatus.PENDING
    )
    app_date_reserv = Column(DateTime(timezone=True), server_default=func.now())


# ─────────────────────────────────────────
# AVIS
# ─────────────────────────────────────────

class Avis(Base):
    __tablename__ = "avis"

    avis_id      = Column(Integer, primary_key=True, index=True)
    # FK vers USER  (1,1 — 0,n : un user rédige 0 ou plusieurs avis)
    profile_id      = Column(
        UUID,
        ForeignKey("profile.profile_id", ondelete="RESTRICT", onupdate="CASCADE"),
        nullable=False,
    )
    # FK vers STYLIST  (1,1 — 0,n : un stylist reçoit 0 ou plusieurs avis)
    sty_id       = Column(
        Integer,
        ForeignKey("stylist.sty_id", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False,
    )
    avis_note    = Column(Integer, nullable=False)   # 1-5 — contrainte CHECK à ajouter en migration
    avis_comment = Column(Text, nullable=True)
    avis_date    = Column(DateTime(timezone=True), server_default=func.now())
