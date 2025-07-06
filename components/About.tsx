import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
    >
      <div className="max-w-5xl w-full">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            About Me &
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
        </div>

        <Card className="bg-gradient from-purple-600/5 via-blue-600/5 to-indigo-600/5 border-purple-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-lg"></div>

          <CardContent className="p-0 relative z-10">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                I'm Mayur Wagh, a passionate MERN stack developer with over 2
                years of experience in creating innovative web solutions. My
                journey began with a mechanical engineering background, but my
                passion for technology led me to transition into web
                development.
              </p>
              <p>
                At Masai School, I honed my skills in full-stack development and
                discovered my love for creating user-centric applications. Since
                then, I've been dedicated to building cutting-edge solutions
                that not only meet technical requirements but also deliver
                exceptional user experiences.
              </p>
              <p>
                Currently, I'm working at Intervue Labs, where I'm spearheading
                the development of an AI-driven interview platform. This role
                has allowed me to combine my technical expertise with innovative
                AI technologies to solve real-world problems in the recruitment
                industry.
              </p>
              <p>
                When I'm not coding, I enjoy mentoring aspiring developers and
                contributing to the tech community. I believe in continuous
                learning and staying updated with the latest technologies to
                deliver the best solutions for my clients and users.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
