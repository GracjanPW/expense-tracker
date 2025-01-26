import { LandingFooter } from './_components/landing-footer';
import { LandingNav } from './_components/landing-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNav />
      {children}
      <LandingFooter    />
    </>
  );
}
