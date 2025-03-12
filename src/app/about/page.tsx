// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to build extraordinary products that solve real problems 
          and deliver exceptional experiences.
        </p>
      </div>

      {/* Company overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2022, our company began with a simple idea: technology should make life better, 
            not more complicated. What started as a small project between friends has grown into a 
            thriving organization with team members across the globe.
          </p>
          <p className="mb-4">
            We believe in building products that are intuitive, accessible, and deliver real value. 
            Our team combines deep technical expertise with a genuine passion for user experience,
            resulting in solutions that people actually enjoy using.
          </p>
          <p>
            Over the years, we've helped numerous businesses streamline their operations, reach new 
            customers, and achieve their goals through thoughtful implementation of technology.
          </p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-8 h-80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium mb-2">Placeholder for</p>
            <p className="text-2xl font-bold">Company Image</p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We embrace new ideas and technologies to solve complex problems in elegant ways."
            },
            {
              title: "Quality",
              description: "We take pride in our craft, paying attention to every detail to deliver exceptional results."
            },
            {
              title: "Transparency",
              description: "We believe in open communication and honest relationships with our clients and team."
            },
            {
              title: "Collaboration",
              description: "We work together across disciplines to create cohesive and comprehensive solutions."
            },
            {
              title: "User-Centric",
              description: "We put the needs and experiences of users at the center of everything we build."
            },
            {
              title: "Adaptability",
              description: "We continuously learn and evolve to stay ahead in a rapidly changing landscape."
            }
          ].map((value, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-secondary/50 mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Team Member {member}</h3>
              <p className="text-muted-foreground">Position</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16 bg-secondary/30 rounded-xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-background p-6 rounded-lg border border-border">
              <p className="italic mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Maecenas non diam eget elit iaculis facilisis. Vestibulum ante ipsum primis 
                in faucibus orci luctus et ultrices posuere cubilia curae."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary/50 mr-3 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Photo</span>
                </div>
                <div>
                  <p className="font-bold">Client Name</p>
                  <p className="text-sm text-muted-foreground">Company Position</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center p-10 bg-primary/10 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We'd love to learn about your project and discuss how we can help bring your vision to life.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium">
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
