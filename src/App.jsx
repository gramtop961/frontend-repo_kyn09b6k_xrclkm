import React from 'react';
import { Home, Dumbbell, Leaf, Brain, Calendar } from 'lucide-react';
import HeroIntro from './components/HeroIntro';
import ExerciseTips from './components/ExerciseTips';
import Nutrition from './components/Nutrition';
import MentalWellness from './components/MentalWellness';
import DailyPlanner from './components/DailyPlanner';

const NavLink = ({ href, icon: Icon, label }) => (
  <a href={href} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
    <Icon className="h-4 w-4" />
    {label}
  </a>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <Home className="h-5 w-5 text-blue-600" />
            <span>Healthy Start</span>
          </div>
          <nav className="hidden gap-1 sm:flex">
            <NavLink href="#home" icon={Home} label="Home" />
            <NavLink href="#exercise" icon={Dumbbell} label="Exercise" />
            <NavLink href="#nutrition" icon={Leaf} label="Nutrition" />
            <NavLink href="#wellness" icon={Brain} label="Wellness" />
            <NavLink href="#planner" icon={Calendar} label="Planner" />
          </nav>
        </div>
      </header>

      <main>
        <HeroIntro />
        <ExerciseTips />
        <Nutrition />
        <MentalWellness />
        <DailyPlanner />
      </main>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-gray-600">
          Made for a college project. Stay consistent, start small, and keep moving.
        </div>
      </footer>
    </div>
  );
};

export default App;
