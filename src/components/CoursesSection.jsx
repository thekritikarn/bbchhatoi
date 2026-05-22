export default function CoursesSection() {
  const streams = [
    {
      title: "+2 Science",
      seats: 128,
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "IT", "English", "MIL (Odia)"],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
      )
    },
    {
      title: "+2 Arts",
      seats: 128,
      subjects: ["History", "Political Science", "Education", "Economics", "Odia", "English"],
      icon: (
        <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      )
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-2">Academics</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary">Courses Offered</h3>
          <p className="mt-4 text-lg text-gray-600">
            We offer comprehensive higher secondary education under CHSE, Odisha with well-equipped labs and experienced faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {streams.map((stream, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                {stream.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{stream.title}</h4>
              <p className="text-primary font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                {stream.seats} Seats Approved
              </p>
              
              <h5 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Subjects</h5>
              <div className="flex flex-wrap gap-2">
                {stream.subjects.map((sub, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
