import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Collaborate = () => {
  return (
    <section
      id="collaborate"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
    >
      <div className="max-w-5xl w-full">
        <Card className="bg-gradient from-purple-600/10 via-blue-600/10 to-indigo-600/10 border-purple-500/20 rounded-3xl p-8 sm:p-12 lg:p-20 relative overflow-hidden backdrop-blur-sm">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"></div>

          <CardContent className="p-0 relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white">
                Let's
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  collaborate
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Ready to bring your ideas to life with cutting-edge web
                development? Let's collaborate to create innovative solutions
                that deliver exceptional user experiences and drive business
                growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                  asChild
                >
                  <a href="mailto:mswagh98@gmail.com">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/mayur-wagh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <Button
              size="icon"
              className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-full w-12 h-12 sm:w-16 sm:h-16"
              asChild
            >
              <a href="mailto:mswagh98@gmail.com">
                <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Collaborate;
