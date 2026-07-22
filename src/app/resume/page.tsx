"use client";

import { useState } from "react";

export default function ResumePage() {
  const [company, setCompany] = useState("Google");
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");

  return (
    <main className="min-h-screen bg-[#050816] text-white px-8 py-10">
      <h1 className="text-5xl font-bold">
        AI Resume Analyzer
      </h1>

      <p className="mt-4 text-gray-400 text-lg max-w-3xl">
        Upload your resume and receive an ATS score,
        company match, missing skills, AI suggestions,
        and a personalized learning roadmap.
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
        {/* Resume Upload */}

        <label className="text-lg font-semibold">
          Upload Resume (PDF)
        </label>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setResume(e.target.files[0]);
            }
          }}
          className="mt-4 block w-full rounded-xl border border-white/10 bg-black/30 p-3"
        />

        {/* Company */}

        <label className="mt-8 block text-lg font-semibold">
          Target Company
        </label>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 p-3"
        >
          <option>Google</option>
          <option>Microsoft</option>
          <option>Amazon</option>
          <option>Meta</option>
          <option>Infosys</option>
          <option>TCS</option>
          <option>Capgemini</option>
        </select>

        {/* Job Description */}

        <label className="mt-8 block text-lg font-semibold">
          Or Paste Job Description
        </label>

        <textarea
          rows={8}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 p-4"
        />

        <button
          onClick={async () => {
            if (!resume) {
              alert("Please select a resume first.");
              return;
            }

            try {
              const formData = new FormData();
              formData.append("resume", resume);

              const response = await fetch("/api/extract-pdf", {
                method: "POST",
                body: formData,
              });

      const data = await response.json();

console.log(data);

if (!response.ok) {
  alert(data.error);
  return;
}

setResumeText(JSON.stringify(data, null, 2));
            } catch (error) {
              console.error(error);
              alert("Failed to upload resume.");
            }
          }}
          className="mt-8 w-full rounded-xl bg-cyan-400 py-4 text-lg font-bold text-black hover:bg-cyan-300 transition"
        >
          Analyze Resume
        </button>

        {resumeText && (
          <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-5">
            <h2 className="text-2xl font-bold mb-4">
              Extracted Resume Text
            </h2>

            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
              {resumeText}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}