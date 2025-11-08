import React from 'react';

const Row = ({ time, activity, note }) => (
  <div className="grid grid-cols-12 items-start gap-3 rounded-md border border-gray-200 bg-white p-3 text-sm shadow-sm">
    <div className="col-span-3 font-medium text-gray-900">{time}</div>
    <div className="col-span-5 text-gray-800">{activity}</div>
    <div className="col-span-4 text-gray-600">{note}</div>
  </div>
);

const DailyPlanner = () => {
  return (
    <section id="planner" className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Daily Routine Planner</h2>
        <p className="mt-2 text-gray-600">A simple schedule you can follow on busy college days.</p>

        <div className="mt-6 space-y-3">
          <Row time="7:00 AM" activity="Wake up + 5 min stretch" note="Gentle neck, shoulders, legs" />
          <Row time="7:10 AM" activity="Hydrate" note="1 glass of water" />
          <Row time="7:15 AM" activity="Warm-up + Routine (20 min)" note="Follow the beginner plan" />
          <Row time="8:00 AM" activity="Breakfast" note="Balanced plate: protein + whole grains + fruit" />
          <Row time="12:30 PM" activity="Lunch" note="Half plate veggies, water first" />
          <Row time="4:30 PM" activity="Walk or light activity (10–15 min)" note="Take the stairs, short walk" />
          <Row time="7:30 PM" activity="Dinner" note="Lighter meal, limit fried food" />
          <Row time="9:30 PM" activity="Wind down" note="No screens, light reading" />
          <Row time="10:30 PM" activity="Sleep" note="Aim 7–9 hours" />
        </div>

        <p className="mt-4 text-sm text-gray-600">Tip: Set reminders on your phone for water breaks and short walks.</p>
      </div>
    </section>
  );
};

export default DailyPlanner;
