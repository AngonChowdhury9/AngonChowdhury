import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  Globe,
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CV() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${baseUrl}CV_Angon_Chowdhury.pdf`;
    link.download = "CV_Angon_Chowdhury.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 pt-8 pb-16" id="cv-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 sticky top-8 self-start">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto aspect-square w-32 rounded-full overflow-hidden mb-4 border border-gray-300 shadow">
                  <img
                    src={`${baseUrl}Image_Angon_Chowdhury.jpg`}
                    alt="Profile"
                    className="w-full h-full object-contain rotate-0"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Angon Chowdhury
                </CardTitle>
                <p className="text-muted-foreground mt-1">Software Engineer</p>

                <div className="flex justify-center mt-4 space-x-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="GitHub"
                    onClick={() =>
                      window.open(
                        "https://github.com/AngonChowdhury9",
                        "_blank"
                      )
                    }
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="LinkedIn"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/angon-chowdhury/",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <Separator className="my-4" />

                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 mr-3 mt-1 text-muted-foreground" />
                    <span>angonchowdhuryiiuc@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>+8801881460708</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1 text-muted-foreground" />
                    <span>Chattogram, Bangladesh</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>Bangladeshi</span>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={downloadPDF}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-8 space-y-8">
            <section id="about">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I’m a Software Engineer with experience in full stack
                    development using <b>.NET</b>, <b>Angular</b>, and low-code
                    platforms like <b>OutSystems</b>. I’ve contributed to
                    building and enhancing ERP, HRM, and LMS systems, combining
                    strong backend logic with clean, user-focused frontend
                    design. With growing expertise in cloud technologies (AWS,
                    Azure), Docker, and microservices, I’m passionate about
                    solving real-world problems through scalable, efficient
                    software solutions—while continuously improving my
                    communication, DevOps, and system design skills.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="experience">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  {[
                    {
                      role: "Software Engineer",
                      company: "Surbana Jurong Bangladesh Ltd.",
                      duration: "May 2023 - Present",
                      details: [
                        "Worked on multiple ERP, HRM, and data-intensive platforms",
                        "Led development of several modules in a large SaaS-based project",
                      ],
                    },
                    {
                      role: "Software Engineering Trainee",
                      company: "S3 Innovate Pte. Ltd.",
                      duration: "Aug 2022 - Apr 2023",
                      details: [
                        "Involved in ERP system development, testing, and support",
                      ],
                    },
                  ].map((exp, idx) => (
                    <div key={idx} className="flex gap-4 relative group">
                      {/* Timeline Dot */}
                      <div className="flex flex-col items-center">
                        <div className="h-4 w-4 bg-blue-500 rounded-full mt-1 shadow-md"></div>
                        {idx !== 2 && (
                          <div className="h-full w-px bg-blue-200 mt-1"></div>
                        )}
                      </div>

                      {/* Experience Card */}
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 w-full hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {exp.role}
                            </h3>
                            <p className="text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                          <Badge variant="outline">{exp.duration}</Badge>
                        </div>
                        <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                          {exp.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section id="projects">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: "AETOS Admin System",
                      tech: [".NET", "Angular", "PostgreSQL"],
                      desc: "This project manages all administrative functions for AETOS, including employee management, project monitoring, HR management, and rescue operations. I worked on a dedicated module to develop and enhance features for employee monitoring and human resource management.",
                    },
                    {
                      title: "Experiential LMS",
                      tech: ["OutSystems O11"],
                      desc: "Supported and enhanced an OutSystems-based Learning Management System (LMS) by resolving bugs, implementing new features, and developing enhancements to improve functionality and user experience. Collaborated directly with clients to gather requirements, provide updates, and ensure satisfaction.",
                    },
                    {
                      title: "MDB LTMS - Lift Management System",
                      tech: [".NET", "Angular", "MSSQL"],
                      desc: "This large-scale project analyzes data from numerous smart sensor-enabled lifts across Singapore, generating valuable insights from the tremendous amount of sensor data collected. The application primarily monitors lift operations and facilitates quick action in case of any issues. I contributed by developing operational programs to present various types of data insights effectively.",
                    },
                    {
                      title: "1Infiniti - Project Management System",
                      tech: [".NET", "Angular", "PostgreSQL"],
                      desc: " It’s a large-scale SaaS-based project management system that simulates processes from tendering to carbon emission calculations. Functioning as an ERP, it includes seven modules, and I handled the complete development lifecycle of three—covering implementation and integration.",
                    },
                    {
                      title: "Devify - A Complete Multi-Vendor System",
                      tech: ["C#", ".NET Framework", "SignalR"],
                      desc: "Multi-vendor eCommerce system with subdomain support and Super Admin controls for store management and payment.",
                    },
                  ].map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold">{proj.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {proj.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section id="skills">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Backend Skills */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">.NET Framework</Badge>
                      <Badge variant="outline">C#</Badge>
                      <Badge variant="outline">LINQ</Badge>
                      <Badge variant="outline">REST API</Badge>
                    </div>
                  </div>

                  {/* Frontend Skills */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">
                      Frontend & UI/UX
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Angular</Badge>
                      <Badge variant="outline">Figma</Badge>
                    </div>
                  </div>
                  {/* Low-Code Platform */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">Low-Code</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">OutSystems O11</Badge>
                    </div>
                  </div>
                  {/* Database Skills */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">Database</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">MS SQL Server</Badge>
                    </div>
                  </div>

                  {/* Cloud & DevOps Skills */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">
                      Cloud & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">Azure</Badge>
                      <Badge variant="outline">AWS</Badge>
                    </div>
                  </div>

                  {/* Architecture & Principles */}
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-md mb-3">
                      Architecture & Principles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">SOLID</Badge>
                      <Badge variant="outline">Clean Architecture</Badge>
                      <Badge variant="outline">Microservices</Badge>
                      <Badge variant="outline">OOP</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="education">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">
                      Bachelors of Science in Computer Science & Engineering
                    </h3>
                    <p className="text-muted-foreground">
                      International Islamic University Chittagong, Chattogram,
                      Bangladesh
                    </p>
                    <p className="text-muted-foreground text-sm">
                      CGPA: 3.21 / 4.00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">
                      Higher Secondary School Certificate
                    </h3>
                    <p className="text-muted-foreground">
                      Hazera Tazu Degree College, Chattogram, Bangladesh
                    </p>
                    <p className="text-muted-foreground text-sm">
                      GPA: 4.17 / 5.00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">
                      Secondary School Certificate
                    </h3>
                    <p className="text-muted-foreground">
                      Mern Sun School, Chattogram, Bangladesh
                    </p>
                    <p className="text-muted-foreground text-sm">
                      GPA: 5.00 / 5.00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
