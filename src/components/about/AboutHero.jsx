import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const AboutHero = () => {
  return (
    <section className="relative min-h-[40vh] bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative flex h-full min-h-[40vh] items-center justify-start">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Hakkımızda
          </h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className={cn(
                    "inline-flex items-center text-sm font-medium text-white/80",
                    "hover:text-white"
                  )}
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-white/60">/</span>
                  <span className="text-sm font-medium text-white">
                    Hakkımızda
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
