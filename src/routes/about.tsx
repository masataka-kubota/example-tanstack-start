import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section
        className="
          rounded-2xl p-6 island-shell
          sm:p-8
        "
      >
        <p className="mb-2 island-kicker">About</p>
        <h1
          className="
            mb-3 display-title text-4xl font-bold text-(--sea-ink)
            sm:text-5xl
          "
        >
          A small starter with room to grow.
        </h1>
        <p className="m-0 max-w-3xl text-base/8 demo-muted">
          TanStack Start gives you type-safe routing, server functions, and modern SSR defaults. Use
          this as a clean foundation, then layer in your own routes, styling, and add-ons.
        </p>
      </section>
    </main>
  );
}
