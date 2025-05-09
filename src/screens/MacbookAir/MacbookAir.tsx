import React from "react";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import { Target } from "lucide-react";
import { useHref } from "react-router-dom";

export const MacbookAir = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      title: "Art selling",
      description:
        "Designed an Art Selling website where a customer can shop for a wide variety of items and place the order.",
      image:
        "/artweb.png",
      link: "https://github.com/sricharitha16/Art-selling-web",
    },
    
    {
      title: "Cafe Management",
      description:
        "Developed a cafe management website where customers can book an event and view cafe's menu.",
      image:
        "/cafeweb.png",
      link: "https://github.com/sricharitha16/cafe-management-web",
    },
    {
      title: "Academic dashboard",
      description:
        "Developed an educational institution application with 5 different dashboards and implemented CRUD operations.",
      image:
        "/wdm.png",
      link: "https://github.com/sricharitha16",
    },
  ];

  

  // Tech stack data organized by category
  const techStack = [
    {
      category: "Programming Languages:",
      icons: [
        { src: "/icons8-javascript-50-1.png", alt: "Javascript" },
        { src: "/icons8-python-50-1.png", alt: "Python" },
        { src: "/icons8-typescript-50-2.png", alt: "Typescript" },
        { src: "/icons8-java-50-1.png", alt: "Java" },
        { src: "/icons8-c-50-1.png", alt: "C" },
        { src: "/icons8-c-programming-50-1.png", alt: "C programming" },
      ],
    },
    {
      category: "Web Development Frameworks/Technologies:",
      icons: [
        { src: "/icons8-html-5-50-1.png", alt: "Html" },
        { src: "/icons8-css3-50-1.png", alt: "Icons css" },
        { src: "/icons8-react-30-1.png", alt: "React" },
        { src: "/icons8-django-24-1.png", alt: "Django" },
        { src: "/icons8-jquery-50-1.png", alt: "Jquery" },
        { src: "/icons8-node-js-32-1.png", alt: "Node js" },
        { src: "/icons8-rest-api-24-1.png", alt: "Rest api" },
        { src: "/icons8-bootstrap-50-1.png", alt: "Bootstrap" },
        { src: "/icons8-tailwind-css-24-1.png", alt: "Tailwind css" },
        { src: "/icons8-graphql-50-1.png", alt: "Graphql" },
        { src: "/icons8-wordpress-50-1.png", alt: "Wordpress" },
        { src: "/icons8-angular-50-1.png", alt: "Angular" },
      ],
    },
    {
      category: "Database Management Systems:",
      icons: [
        { src: "/icons8-postgresql-50-1.png", alt: "Postgresql" },
        { src: "/icons8-mysql-50-1.png", alt: "Mysql" },
        { src: "/icons8-mongodb-24-1.png", alt: "Mongodb" },
        { src: "/icons8-sqlite-50-1.png", alt: "Sqlite" },
      ],
    },
    {
      category: "Development Tools and Frameworks:",
      icons: [
        { src: "/icon.svg", alt: "Icon" },
        { src: "/icons8-visual-studio-50-1.png", alt: "Visual studio" },
        { src: "/icons8-selenium-50-1.png", alt: "Selenium" },
        { src: "/icons8-jira-50-1.png", alt: "Jira" },
        { src: "/icons8-postman-api-64-1.png", alt: "Postman api" },
      ],
    },
    {
      category: "Design and Graphic Editing Tools:",
      icons: [
        { src: "/icons8-figma-50-1.png", alt: "Figma" },
        { src: "/icons8-adobe-illustrator-50-1.png", alt: "Adobe" },
        { src: "/icons8-adobe-photoshop-50-1.png", alt: "Adobe" },
        { src: "/icons8-adobe-xd-50-1.png", alt: "Adobe xd" },
        { src: "/icons8-framer-logo-24-1.png", alt: "Framer logo" },
      ],
    },
    {
      category: "Cloud Technologies:",
      icons: [
        { src: "/icons8-aws-24-1.png", alt: "Aws" },
        { src: "/icons8-azure-48-1.png", alt: "Azure" },
        { src: "/icons8-google-cloud-48--1--1.png", alt: "Google cloud" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { src: "/linkedin-2.png", alt: "Linkedin", link:"http://www.linkedin.com/in/sricharitha-t/"},
    { src: "/github.png", alt: "Git hub", link:"https://github.com/sricharitha16" },
    { src: "/letter.png", alt: "Letter", link:"sricharitha.t16@gmail.com" },
    { src: "/instagram.png", alt: "Instagram", link:"https://www.instagram.com/artbysricharitha/" },
  ];

  return (
    <div className="bg-[#e1d7c1] flex flex-row justify-center w-full">
      <div className="bg-[#e1d7c1] w-[1280px] h-[885px] relative">
        <header className="absolute w-[1235px] h-[83px] top-[25px] left-[21px] bg-[#2e284c] rounded-[20px] overflow-hidden">
          <div className="flex w-[1192px] items-center justify-between relative top-[33px] left-[18px]">
            <div className="relative w-[157.55px] h-[16.94px]">
              <div className="absolute top-[-11px] left-0 [font-family:'Yuji_Boku',Helvetica] font-normal text-[#ceaf6d] text-[25px] tracking-[0] leading-[normal]">
                SRICHARITHA
              </div>
            </div>

            <nav className="relative w-[185px] h-3">
              <div className="flex w-[185px] items-center justify-between relative">
                <button className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-[#ceaf6d] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            
                  <a href="https://docs.google.com/document/d/1GsoFbt-1HQZBHZ1eOE-fWfL1RTAANe2na4Pon2Gp0Lg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
                </button>

                <button className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-[#ceaf6d] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  <a href="http://www.linkedin.com/in/sricharitha-t/" target="_blank" rel="noopener noreferrer">CONTACT</a>
                </button>
              </div>
            </nav>
          </div>
        </header>

        <Card className="absolute w-[539px] h-[380px] top-[130px] left-[21px] bg-[#2e284c] rounded-[20px] overflow-hidden border-none">
          <CardContent className="relative top-4 left-4 w-[523px] h-[281px] p-0">
            <div className="absolute top-0 left-0 w-[523px] h-[281px]">
              <img
                className="absolute w-[97px] h-[103px] top-[15px] left-[426px]"
                alt="Flower ICON"
                src="/flower-icon.svg"
              />

              <CardTitle className="absolute w-[489px] top-0 left-0 [font-family:'Inknut_Antiqua',Helvetica] font-bold text-[#ceaf6d] text-xs tracking-[0] leading-[normal] underline">
                PROJECTS:
              </CardTitle>

              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="w-[152px] h-[214px] top-[67px] bg-[#ceaf6d] absolute rounded-[20px] overflow-hidden border-none"
                  style={{ left: index * 176 }}
                >
                  <CardContent className="p-0">
                    <div className="absolute w-[140px] h-[29px] top-[135px] left-1.5">
                      <div className="absolute w-[138px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#323131] text-[8px] tracking-[0] leading-[10.4px]">
                        {project.description}
                      </div>
                    </div>

                    <img
                      className="absolute w-[137px] h-0.5 top-[180px] left-[7px]"
                      alt="Border"
                      src="/border-2.svg"
                    />

                    <div className="absolute w-[135px] h-[119px] top-[9px] left-1.5">
                      <img
                        className="absolute w-[134px] h-0.5 top-[117px] left-0"
                        alt="Border"
                        src="/border.svg"
                      />

                      <a href={project.link} className="block" target="_blank" rel="noopener noreferrer">
                        <div
                          className="absolute w-[124px] h-[89px] top-[22px] left-1.5 rounded-2xl bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                      </a>

                      <img
                        className="absolute w-5 h-[18px] top-0 left-[110px]"
                        alt="Arrow ICON"
                        src="/arrow-icon.svg"
                      />

                      <div className="absolute w-[103px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-medium text-[#2e284c] text-[10px] tracking-[0] leading-[normal]">
                        {project.title}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div
          className="absolute w-[309px] h-[381px] top-[130px] left-[578px] rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: "url(/image.png)" }}
        />

        <Card className="w-[344px] h-[558px] top-[132px] left-[912px] bg-[#2e284c] absolute rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="absolute w-72 h-[453px] top-[63px] left-7">
              <div className="absolute w-[286px] top-0 left-0 [font-family:'Inknut_Antiqua',Helvetica] font-normal text-transparent text-[13px] tracking-[0] leading-[13px]">
                <span className="font-light text-[#ceaf6d] leading-5">
                  I&apos;m a Software Engineer with 4 years of experience in
                  Front-End and Full-Stack Development, specializing in ReactJS,
                  Django, JavaScript, TypeScript, and Python. Strong expertise
                  in UI/UX design, API development, cloud technologies (AWS,
                  Azure), and performance optimization. <br />
                  Proficient at designing and implementing scalable web
                  applications, enhancing system efficiency, and collaborating
                  in Agile/Scrum environments to deliver high-quality solutions.
                  <br />I am also an artist with a deep passion for design. My
                  artistic practice is not just a hobby, but a profound means of
                  expressing my creativity and design concepts. Engaging in
                  artistic endeavors allows me to explore and articulate
                  innovative ideas, continually pushing the boundaries of my
                  imagination and skill.
                </span>
              </div>
            </div>

            <div className="absolute w-[149px] h-9 top-[19px] left-6">
              <div className="absolute w-[147px] top-0 left-0 [font-family:'Inknut_Antiqua',Helvetica] font-bold text-[#ceaf6d] text-sm tracking-[0] leading-[normal] underline">
                ABOUT:
              </div>
            </div>

            <a href="https://github.com/sricharitha16" target="_blank" rel="noopener noreferrer">
              <img
              className="absolute w-6 h-[26px] top-[17px] left-[302px]"
              alt="Arrow ICON"
              src="/arrow-icon.svg" 
            /></a>
          </CardContent>
        </Card>

        <Card className="absolute w-[410px] h-[283px] top-[532px] left-[21px] bg-[#2e284c] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-0">
            <img
              className="absolute w-[38px] h-[38px] top-3.5 left-[333px]"
              alt="Circle ICON"
              src="/circle-icon.svg"
            />

            <div className="absolute w-[86px] h-[22px] top-[13px] left-[31px] [font-family:'Inter',Helvetica] font-semibold text-[#ceaf6d] text-sm tracking-[0] leading-[18.2px] underline">
              UI/UX:
            </div>

            <Card className="w-[152px] h-[214px] top-[52px] left-[35px] bg-[#ceaf6d] absolute rounded-[20px] overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="absolute w-[140px] h-[29px] top-[135px] left-1.5">
                  <div className="absolute w-[138px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#323131] text-[10px] tracking-[0] leading-[13px]">
                    Designed an Art Selling website specific to artist
                    sricharitha
                  </div>
                </div>

                <img
                  className="absolute w-[250px] h-0.5 top-[180px] left-[px]"
                  alt="Border"
                  src="/border-1.svg"
                />

                <div className="absolute w-[135px] h-[119px] top-[9px] left-1.5">
                  <img
                    className="absolute w-[134px] h-0.5 top-[117px] left-0"
                    alt="Border"
                    src="/border.svg"
                  />

                  <div className="bg-[url(/artui.png)] absolute w-[124px] h-[89px] top-[22px] left-1.5 rounded-2xl bg-cover bg-center" />

                  <img
                    className="absolute w-5 h-5 top-0 left-[104px] z-10"
                    alt="Arrow ICON"
                    src="/arrow-icon.svg"
                  />

                  <div className="absolute w-[98px] top-0 left-1.5 [font-family:'Inter',Helvetica] font-medium text-[#2e284c] text-sm tracking-[0] leading-[normal]">
                    Art by sri
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="absolute w-[443px] h-[279px] top-[532px] left-[450px] bg-[#2e284c] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="relative w-[379px] h-[227px] top-3 left-8">
              <div className="absolute w-[133px] -top-px left-0 [font-family:'Inknut_Antiqua',Helvetica] font-semibold text-[#ceaf6d] text-sm tracking-[0] leading-[17px] underline">
                Tech Stack:
              </div>

              <div className="flex flex-col w-[379px] h-[205px] items-start gap-[11px] absolute top-[22px] left-0">
                {techStack.map((category, index) => (
                  <div
                    key={index}
                    //className="inline-flex items-center gap-20 relative flex-[0_0_auto]"
                    className="flex flex-col gap-[0px] relative"
                    
                  >
                    <div className="relative w-[165px] h-[19px] [font-family:'Inknut_Antiqua',Helvetica] font-normal text-[#ceaf6d] text-[10px] tracking-[0] leading-[17px] whitespace-nowrap">
                      {category.category}
                    </div>

                    <div
                      className="flex items-center justify-between relative"
                      style={{ width: index === 1 ? "372px" : "auto" }}
                    >
                      {category.icons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          className="relative w-5 h-5 object-cover"
                          alt={icon.alt}
                          src={icon.src}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute w-[344px] h-[103px] top-[705px] left-[911px] bg-[#2e284c] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="inline-flex items-center gap-[50px] p-[5px] relative top-8 left-8">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt={link.alt}
                    src={link.src}
                  />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};