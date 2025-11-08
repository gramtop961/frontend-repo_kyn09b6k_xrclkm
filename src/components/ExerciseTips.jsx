import React from 'react';

const Tip = ({ title, children }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const ExerciseTips = () => {
  return (
    <section id="exercise" className="bg-gray-50 py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Exercise Tips</h2>
        <p className="mt-2 text-gray-600">Quick routines you can do at home. No gym required.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Tip title="5–10 min Warm-up">
            March in place, arm circles, and gentle leg swings. Keep it light and
            smooth to wake up your muscles and joints.
          </Tip>

          <Tip title="Beginner Routine (15–20 min)">
            - 10 bodyweight squats x 2 sets
            <br />- 10 wall push-ups x 2 sets
            <br />- 10 glute bridges x 2 sets
            <br />- 20 second plank x 2 sets
            <br />Rest 45–60 seconds between sets.
          </Tip>

          <Tip title="Posture Basics">
            Keep shoulders relaxed, chest open, and core gently tight. Look
            forward, not down. Breathe naturally during each movement.
          </Tip>

          <Tip title="Cool-down & Stretch (3–5 min)">
            Walk slowly, then stretch calves, quads, hamstrings, chest, and
            shoulders. Hold each stretch for ~20 seconds without bouncing.
          </Tip>
        </div>
      </div>
    </section>
  );
};

export default ExerciseTips;
