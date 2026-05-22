export default function Announcements() {
  const announcementsList = [
    "Admission Open for 2026-27 Academic Session — Apply Now!",
    "+2 Science & +2 Arts under CHSE, Odisha",
    "Hostel & Transport Facilities Available",
    "Special Support for Economically Weak Students",
    "NEET & OJEE Competitive Exam Preparation"
  ];

  return (
    <div className="events-bar">
      <div className="container">
        <div className="events-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Announcements
        </div>
        <div className="events-scroll">
          <div className="events-scroll-inner" data-duplicated="true">
            {announcementsList.map((item, idx) => (
              <span key={`orig-${idx}`}>{item}</span>
            ))}
            {announcementsList.map((item, idx) => (
              <span key={`dup-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
