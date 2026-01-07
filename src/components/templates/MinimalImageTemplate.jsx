import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== "string") return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // SAFE IMAGE HANDLING
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (data?.personal_info?.image instanceof File) {
      const url = URL.createObjectURL(data.personal_info.image);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof data?.personal_info?.image === "string") {
      setImgUrl(data.personal_info.image);
    }
  }, [data?.personal_info?.image]);

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        {/* IMAGE */}
        <div className="col-span-1 py-10">
          {imgUrl && (
            <img
              src={imgUrl}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto"
              style={{ background: accentColor + "70" }}
            />
          )}
        </div>

        {/* NAME */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
            {data?.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data?.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* LEFT SIDEBAR */}
        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0">
          {/* CONTACT */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm">
              {data?.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  {data.personal_info.phone}
                </div>
              )}
              {data?.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: accentColor }} />
                  {data.personal_info.email}
                </div>
              )}
              {data?.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  {data.personal_info.location}
                </div>
              )}
            </div>
          </section>

          {/* EDUCATION */}
          {Array.isArray(data?.education) && data.education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                EDUCATION
              </h2>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-3 text-sm">
                  <p className="font-semibold uppercase">{edu.degree}</p>
                  <p className="text-zinc-600">{edu.institution}</p>
                  <p className="text-xs text-zinc-500">
                    {formatDate(edu.graduation_date)}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* SKILLS */}
          {Array.isArray(data?.skills) && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                SKILLS
              </h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="col-span-2 p-8 pt-0">
          {/* SUMMARY */}
          {typeof data?.professional_summary === "string" && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700">{data.professional_summary}</p>
            </section>
          )}

          {/* EXPERIENCE */}
          {Array.isArray(data?.experience) && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>

              {data.experience.map((exp, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <span className="text-xs text-zinc-500">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: accentColor }}>
                    {exp.company}
                  </p>

                  {typeof exp.description === "string" &&
                    exp.description.trim() && (
                      <ul className="list-disc list-inside text-sm text-zinc-700">
                        {exp.description.split("\n").map((line, j) => (
                          <li key={j}>{line}</li>
                        ))}
                      </ul>
                    )}
                </div>
              ))}
            </section>
          )}

          {/* PROJECTS */}
          {Array.isArray(data?.project) && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>

              {data.project.map((p, i) => (
                <div key={i} className="mt-4">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm" style={{ color: accentColor }}>
                    {p.type}
                  </p>

                  {typeof p.description === "string" &&
                    p.description.trim() && (
                      <ul className="list-disc list-inside text-sm text-zinc-700">
                        {p.description.split("\n").map((line, j) => (
                          <li key={j}>{line}</li>
                        ))}
                      </ul>
                    )}
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
