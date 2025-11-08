import React from 'react';

const HeroIntro = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Fitness & Health Tips for Beginners
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Small steps make a big difference. This simple guide helps you start a
          healthy lifestyle at home with easy exercises, basic nutrition, and
          everyday habits you can actually follow.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#exercise" className="rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Start Moving
          </a>
          <a href="#nutrition" className="rounded-md border border-gray-300 px-5 py-2.5 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Eat Better
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
