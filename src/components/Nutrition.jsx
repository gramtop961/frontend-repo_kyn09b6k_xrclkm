import React from 'react';

const List = ({ title, items }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const Nutrition = () => {
  const meals = [
    'Oats with fruit and nuts',
    'Eggs or tofu with whole-grain toast and veggies',
    'Rice or quinoa bowl with beans, veggies, and lean protein',
    'Yogurt with berries and seeds',
  ];

  const avoid = [
    'Sugary drinks (soda, energy drinks)',
    'Ultra-processed snacks (chips, candy)',
    'Too much fried or fast food',
    'Skipping meals and overeating later',
  ];

  const hydration = [
    'Aim for 6–8 glasses of water daily',
    'Drink a glass after you wake up and with each meal',
    'Carry a bottle during classes to sip regularly',
  ];

  const balancedChart = [
    '1/2 plate: vegetables and fruits',
    '1/4 plate: whole grains (rice, roti, oats, quinoa)',
    '1/4 plate: protein (beans, lentils, eggs, fish, chicken, tofu)',
    'Add healthy fats (nuts, seeds, olive oil) in small amounts',
  ];

  return (
    <section id="nutrition" className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Diet & Nutrition</h2>
        <p className="mt-2 text-gray-600">Simple choices that fuel your body and mind.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <List title="Healthy Meal Ideas" items={meals} />
          <List title="Hydration Basics" items={hydration} />
          <List title="Foods to Limit" items={avoid} />
          <List title="Balanced Plate Guide" items={balancedChart} />
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
