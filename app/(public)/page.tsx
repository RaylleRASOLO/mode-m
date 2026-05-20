"use client";

import Activity from "../components/features/landing-page/activity-section";
import Hero from "../components/features/landing-page/hero-section";
import NewCollection from "../components/features/landing-page/new-collection-section";
import Product from "../components/features/landing-page/product-section";
import Stat from "../components/features/landing-page/stat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Stat />
      <Product />
      <NewCollection />
      <Activity />
    </main>
  );
}
