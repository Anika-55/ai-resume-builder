const MinimalTemplate = ({ data, accentColor }) => {
  const safeText = (val) => (typeof val === "string" ? val : "");

  const formatDate = (dateStr) => {
    if (typeof dateStr !== "string") return "";
    const parts = dateStr.split("-");
    if (parts.length !== 2) return "";
    const [year, month] = parts;
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-thin mb-4 tracking-wide">
          {safeText(data?.personal_info?.full_name) || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          {safeText(data?.personal_info?.email) && (
            <span>{data.personal_info.email}</span>
          )}
          {safeText(data?.personal_info?.phone) && (
            <span>{data.personal_info.phone}</span>
          )}
          {safeText(data?.personal_info?.location) && (
            <span>{data.personal_info.location}</span>
          )}
          {safeText(data?.personal_info?.linkedin) && (
            <span className="break-all">{data.personal_info.linkedin}</span>
          )}
          {safeText(data?.personal_info?.website) && (
            <span className="break-all">{data.personal_info.website}</span>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {safeText(data?.professional_summary) && (
        <section className="mb-10">
          <p className="text-gray-700">{data.professional_summary}</p>
        </section>
      )}

      {/* EXPERIENCE */}
      {Array.isArray(data?.experience) && (
        <section className="mb-10">
          <h2
            className="text-sm uppercase tracking-widest mb-6 font-medium"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="text-lg font-medium">
                  {safeText(exp.position)}
                </h3>
                <span className="text-sm text-gray-500">
                  {formatDate(exp.start_date)} -{" "}
                  {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{safeText(exp.company)}</p>

              {safeText(exp.description) && (
                <div className="text-gray-700 whitespace-pre-line">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* PROJECTS */}
      {Array.isArray(data?.project) && (
        <section className="mb-10">
          <h2
            className="text-sm uppercase tracking-widest mb-6 font-medium"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          {data.project.map((proj, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-medium">{safeText(proj.name)}</h3>
              {safeText(proj.description) && (
                <p className="text-gray-600">{proj.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {Array.isArray(data?.education) && (
        <section className="mb-10">
          <h2
            className="text-sm uppercase tracking-widest mb-6 font-medium"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          {data.education.map((edu, i) => (
            <div key={i} className="flex justify-between mb-4">
              <div>
                <h3 className="font-medium">
                  {safeText(edu.degree)}{" "}
                  {safeText(edu.field) && `in ${edu.field}`}
                </h3>
                <p className="text-gray-600">{safeText(edu.institution)}</p>
                {safeText(edu.gpa) && (
                  <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {formatDate(edu.graduation_date)}
              </span>
            </div>
          ))}
        </section>
      )}

      {/* SKILLS */}
      {Array.isArray(data?.skills) && data.skills.length > 0 && (
        <section>
          <h2
            className="text-sm uppercase tracking-widest mb-6 font-medium"
            style={{ color: accentColor }}
          >
            Skills
          </h2>
          <div className="text-gray-700">
            {data.skills.filter((s) => typeof s === "string").join(" • ")}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
