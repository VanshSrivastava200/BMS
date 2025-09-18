import React from 'react'

function AiGenerated() {
    return (
  <div className=" bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-100 " style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}>


    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(34,211,238,0.13),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(168,85,247,0.12),transparent)]"></div>
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,.15)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    </div>

    <main className="relative mx-auto max-w-[1440px] px-4 py-8 lg:py-12">

      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="group inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-slate-300 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-800/60">
            <i data-lucide="arrow-left" className="h-4 w-4"></i>
            <span className="text-sm">Back</span>
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900/70 shadow-[0_0_0_2px_rgba(0,0,0,0.4),0_0_24px_rgba(168,85,247,0.18)]">
            <span className="text-sm font-semibold tracking-tight text-cyan-300">HC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-slate-400">Healthcare AI</span>
            <span className="text-base font-medium tracking-tight text-slate-200/90">Diagnosis Details</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.25)]">Active Diagnosis</span>
        </div>
      </header>

      <div className="mb-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(168,85,247,0.22)] backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <i data-lucide="user-round" className="h-4 w-4 text-cyan-300"></i>
              <div className="text-sm">
                <span className="text-slate-400">Patient</span>
                <span className="ml-2 font-medium text-slate-100 tracking-tight">Aarav Mehta</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="calendar" className="h-4 w-4 text-fuchsia-300"></i>
              <div className="text-sm text-slate-300">Age 42</div>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="venetian-mask" className="h-4 w-4 text-emerald-300"></i>
              <div className="text-sm text-slate-300">Male</div>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="droplets" className="h-4 w-4 text-cyan-300"></i>
              <div className="text-sm text-slate-300">O+</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <i data-lucide="stethoscope" className="h-4 w-4 text-emerald-300"></i>
              <div className="text-sm">
                <span className="text-slate-400">Doctor</span>
                <span className="ml-2 font-medium text-slate-100 tracking-tight">Dr. Jane Doe</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="clock-4" className="h-4 w-4 text-fuchsia-300"></i>
              <div className="text-sm text-slate-300">Diagnosed on Sep 18, 2025</div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        <section className="order-1 lg:order-2 lg:col-span-12">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(168,85,247,0.22)] backdrop-blur">
            <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400/60 via-fuchsia-400/60 to-emerald-400/60"></div>
            <div className="mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Diagnosis Summary</h2>
              <p className="mt-2 text-sm text-slate-400">Overview of the condition, prescriptions, and recommended investigations</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-2">
                <i data-lucide="activity" className="h-5 w-5 text-cyan-300"></i>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100 text-center">Hypertension — Stage II</h3>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <i data-lucide="message-square-text" className="h-4 w-4 text-emerald-300"></i>
                <span className="text-sm font-medium text-slate-300">Doctor’s Comments</span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                BP remains elevated across multiple readings. Recommend lifestyle modifications (low-salt diet, regular aerobic exercise, stress reduction). Monitor BP twice daily and maintain a log. Immediate review if headaches, chest pain, or visual changes occur.
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <i data-lucide="pill" className="h-4 w-4 text-fuchsia-300"></i>
                <span className="text-sm font-medium text-slate-300">Medicines Prescribed</span>
              </div>
              <ul className="divide-y divide-slate-800/80 overflow-hidden rounded-xl border border-slate-800">
                <li className="grid grid-cols-1 gap-2 bg-slate-950/40 p-3 sm:grid-cols-3">
                  <div className="text-slate-200">Amlodipine 5 mg</div>
                  <div className="text-slate-400">Once daily</div>
                  <div className="text-slate-400">6 weeks</div>
                </li>
                <li className="grid grid-cols-1 gap-2 bg-slate-950/30 p-3 sm:grid-cols-3">
                  <div className="text-slate-200">Metoprolol 25 mg</div>
                  <div className="text-slate-400">Once daily (morning)</div>
                  <div className="text-slate-400">6 weeks</div>
                </li>
                <li className="grid grid-cols-1 gap-2 bg-slate-950/40 p-3 sm:grid-cols-3">
                  <div className="text-slate-200">Atorvastatin 20 mg</div>
                  <div className="text-slate-400">Once daily (night)</div>
                  <div className="text-slate-400">8 weeks</div>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <i data-lucide="flask-round" className="h-4 w-4 text-cyan-300"></i>
                <span className="text-sm font-medium text-slate-300">Recommended Tests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">ECG</span>
                <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">Echocardiogram</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">Chest X-Ray</span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">Lipid Profile</span>
                <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">HbA1c</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/40 bg-slate-900/80 p-6 shadow-[0_0_0_1px_rgba(8,145,178,0.35),0_20px_80px_-20px_rgba(59,130,246,0.35)] backdrop-blur">
            <div className="mb-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400/70 via-cyan-400/70 to-fuchsia-400/70"></div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i data-lucide="sparkles" className="h-5 w-5 text-cyan-300"></i>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">AI Simplified Report</h2>
              </div>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-200">Patient-friendly</span>
            </div>

            <div id="ai-loading" className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <i data-lucide="loader" className="h-4 w-4 animate-spin text-cyan-300"></i>
                <span>Generating AI summary...</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-3 w-3/5 animate-pulse rounded bg-slate-800"></div>
                <div className="h-3 w-4/5 animate-pulse rounded bg-slate-800"></div>
                <div className="h-3 w-2/5 animate-pulse rounded bg-slate-800"></div>
              </div>
            </div>

            <div id="ai-result" className="hidden">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <ul className="space-y-3 text-[15px] leading-relaxed text-slate-200">
                  <li className="flex gap-2">
                    <span className="select-none">🧑‍⚕️</span>
                    <span>Your blood pressure is higher than normal. We’ll work to bring it down safely over the next few weeks.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">💊</span>
                    <span>Medicines help relax blood vessels and steady your heart rate. Take them at the same time every day.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">🧪</span>
                    <span>Blood tests will check cholesterol and sugar levels. These can affect blood pressure and heart health.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">🩻</span>
                    <span>ECG/X-Ray help us see how your heart is working. These are quick and painless.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">🧑‍⚕️</span>
                    <span>Record your BP twice daily and note headaches, chest pain, or vision changes. Contact us if these occur.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(168,85,247,0.22)] backdrop-blur">
            <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400/60 via-fuchsia-400/60 to-emerald-400/60"></div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i data-lucide="folder-open" className="h-5 w-5 text-fuchsia-300"></i>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Lab Reports & Documents</h2>
              </div>
              <span className="text-xs text-slate-400">5 items</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3 transition-colors hover:border-cyan-500/30">
                <div className="aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
                  <div className="flex h-full items-center justify-center text-slate-400">
                    <i data-lucide="file-text" className="h-8 w-8"></i>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200 tracking-tight">Blood Test - CBC</p>
                    <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-200">PDF</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                      <i data-lucide="eye" className="h-3.5 w-3.5"></i> View
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                      <i data-lucide="download" className="h-3.5 w-3.5"></i> Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3 transition-colors hover:border-emerald-500/30">
                <div className="aspect-video overflow-hidden rounded-lg border border-slate-800">
                  <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="ECG" className="h-full w-full object-cover"/>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200 tracking-tight">ECG</p>
                    <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200">JPG</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                      <i data-lucide="eye" className="h-3.5 w-3.5"></i> View
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs text-emerald-200 hover:border-emerald-400/60 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                      <i data-lucide="download" className="h-3.5 w-3.5"></i> Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3 transition-colors hover:border-fuchsia-500/30">
                <div className="aspect-video overflow-hidden rounded-lg border border-slate-800">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Chest X-Ray" className="h-full w-full object-cover"/>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200 tracking-tight">Chest X-Ray</p>
                    <span className="rounded-md border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] text-fuchsia-200">PNG</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                      <i data-lucide="eye" className="h-3.5 w-3.5"></i> View
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 px-2.5 py-1.5 text-xs text-fuchsia-200 hover:border-fuchsia-400/60 hover:text-fuchsia-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20">
                      <i data-lucide="download" className="h-3.5 w-3.5"></i> Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3 transition-colors hover:border-cyan-500/30">
                <div className="aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
                  <div className="flex h-full items-center justify-center text-slate-400">
                    <i data-lucide="file-bar-chart" className="h-8 w-8"></i>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200 tracking-tight">Lipid Profile</p>
                    <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-200">PDF</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                      <i data-lucide="eye" className="h-3.5 w-3.5"></i> View
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                      <i data-lucide="download" className="h-3.5 w-3.5"></i> Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                <div className="aspect-video overflow-hidden rounded-lg border border-dashed border-slate-800 bg-slate-900/50">
                  <div className="flex h-full flex-col items-center justify-center text-slate-500">
                    <i data-lucide="hourglass" className="mb-2 h-7 w-7"></i>
                    <span className="text-sm">Awaiting MRI Report</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-400 tracking-tight">MRI Brain</p>
                  <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">Pending</span>
                </div>
                <div className="mt-2 text-xs text-slate-500">No file uploaded yet</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(168,85,247,0.22)] backdrop-blur">
            <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400/60 via-fuchsia-400/60 to-emerald-400/60"></div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              <button id="requestUploads" className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-base font-medium tracking-tight text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.25)] transition-all hover:border-emerald-400/60 hover:text-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/20">
                <i data-lucide="upload-cloud" className="h-5 w-5"></i>
                Request Additional Lab Uploads
              </button>
              <button id="shareDiagnosis" className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-base font-medium tracking-tight text-cyan-200 shadow-[0_0_0_1px_rgba(8,145,178,0.25)] transition-all hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-500/20">
                <i data-lucide="share-2" className="h-5 w-5"></i>
                Share Diagnosis Securely
              </button>
            </div>
            <p id="actionToast" className="pointer-events-none mt-3 hidden text-center text-sm text-emerald-300">Secure link copied to clipboard</p>
          </div>
        </section>
      </div>
    </main>
  </div>

    )
}

export default AiGenerated