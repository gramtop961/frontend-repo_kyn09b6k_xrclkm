import React from 'react';

const Card = ({ title, children }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-700 leading-relaxed">{children}</p>
  </div>
);

const MentalWellness = () => {
  return (
    <section id="wellness" className="bg-gray-50 py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Mental Wellness</h2>
        <p className="mt-2 text-gray-600">Your mind and body work together. Care for both.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card title="Sleep Matters">
            Aim for 7–9 hours nightly. Keep a regular sleep time, make your room
            dark and cool, and avoid screens 30 minutes before bed.
          </Card>

          <Card title="Stress Management">
            Use the 3-3-3 rule: name 3 things you see, 3 sounds you hear, and
            move 3 parts of your body. It helps you feel grounded quickly.
          </Card>

          <Card title="Breathing Exercise (Box Breath)">
            Inhale for 4 seconds, hold 4, exhale 4, hold 4. Repeat 4 rounds.
            Do this before exams or whenever you feel tense.
          </Card>

          <Card title="Quick Meditation">
            Sit comfortably. Close your eyes. Focus on your breath for 3–5
            minutes. If your mind wanders, gently bring it back to breathing.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MentalWellness;
