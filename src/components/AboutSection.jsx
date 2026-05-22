export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/20 z-10"></div>
            <img 
              src="/assets/images/campus.jpg" 
              alt="Campus Building" 
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl z-20 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Since 2016</h3>
              <p className="text-sm text-gray-600">Empowering rural youth through quality education</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-2">About The Institution</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 leading-tight">
              A Legacy of <br />Academic Excellence
            </h3>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Founded in 2016 by the Moon Light Charitable Trust, <strong>B.B. Chhatoi Higher Secondary School</strong> is a premier educational institution located in Dhodra, Nabarangpur, Odisha.
              </p>
              <p>
                We offer both +2 Science and +2 Arts streams under the Council of Higher Secondary Education (CHSE), Odisha. Our mission is to provide world-class infrastructure and affordable education to the rural and tribal youth of Nabarangpur district and beyond.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Experienced Faculty",
                  "Modern Laboratories",
                  "Separate Hostels",
                  "Green Campus"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
