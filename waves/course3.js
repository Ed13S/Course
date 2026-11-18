// ---------------------------------------------------------------- w9
COURSE.push({ id: "w9", t: "Resonance", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Natural frequency</b>: the frequency an object vibrates at when you disturb it and let go (a swing, a guitar string, the air in a bottle). <b>Driving (forcing) frequency</b>: the frequency of the push you keep applying. <b>Resonance</b>: when the driving frequency matches a natural frequency, so the vibration builds up to a large amplitude. <b>Damping</b>: energy loss (friction) that stops the vibration growing forever.`,
   ["A swing has natural frequency 0.5 Hz. At what driving frequency do you get resonance?", "0.5 Hz."]),
 T(1, String.raw`<b>The swing story.</b> On a swing, if you push at random times, sometimes you help and sometimes you fight the motion, so nothing much happens. If you push <i>every time</i> the swing is at the same point (once per swing, matching its natural frequency), every push adds energy at the right moment and the swings get huge. That is resonance: <b>well-timed pushes add up.</b>`,
   ["Why does pushing at the wrong rate do little?", "The pushes sometimes oppose the motion, so the energy does not build up."]),
 T(2, String.raw`<b>Resonance in tubes and strings.</b> A source such as vibrating lips, a reed, vocal cords or a tuning fork produces a wide mix of frequencies. The tube (or string) only builds up the ones that form a standing wave: the waves reflect at the ends and line up with the new waves so they reinforce. Those frequencies, $f_n$, are the natural frequencies you worked out. Everything else is weak. That is how a flute or trombone turns a buzzing mix into a loud single note, and why a trombone player changes the length to change the note.`,
   ["Why is a wine-glass sound loud at one pitch only?", "Only the glass's natural frequency is amplified by resonance."],
   ["Saying resonance 'creates' energy. The energy comes from the source; resonance just makes the transfer very efficient."]),
 T(2, String.raw`<b>Resonance curve.</b> Plot response size against driving frequency: a peak at the natural frequency. <b>Less damping</b> gives a taller, narrower peak; <b>more damping</b> gives a lower, wider one. Engineers use damping (shock absorbers, tuned mass dampers in tall buildings) to stop dangerous resonance in bridges and buildings, and the opposite in musical instruments and radio tuners.`, null, null, "resonance"),
 T(2, String.raw`<b>Worked example: the trombone / resonance tube.</b> Sound of one frequency is fed into a tube. As the tube is lengthened, the intensity at the far end peaks every time a new standing wave fits. <b>Successive maxima are $\frac\lambda2$ apart.</b> If maxima occur every $0.115$ m, $\frac\lambda2=0.115$ so $\lambda=0.230$ m, and $f=\frac v\lambda=\frac{340}{0.230}=1.48\times10^3$ Hz.`,
   ["Resonances occur every 0.34 m of tube length. Find λ.", "$0.68$ m."],
   ["Saying successive maxima are one wavelength apart. They are λ/2 apart."]),
 T(2, String.raw`<b>Weak resonance.</b> A container that is $0.27$ m long (closed at one end) has $f_1\approx\frac{340}{4(0.27)}\approx315$ Hz. Odd harmonics: $315,\ 945,\ 1575,\ \ldots,\ 2835$ Hz. A tuning fork near one of them gives a weak response because that harmonic is a real (but weak) natural frequency, whereas a fork at an unrelated frequency gives almost nothing. Tip for exam answers: name the standing wave (nodes/antinodes), say which harmonic it is, and say why the response is weaker (higher harmonics carry less energy).`),
 T(2, String.raw`<b>Model answer: 'Briefly explain resonance in a tube open at both ends.'</b> Sound waves are reflected at the ends of the tube. When the driving frequency equals a natural frequency, the reflected and incident waves superpose to form a standing wave, with nodes at both open ends. The amplitude builds up, giving a loud sound. The natural frequencies are $f=\frac{nv}{2L}$.`),
 T(3, String.raw`<b>Stretch: resonance in electronics.</b> A circuit with an inductor $L$ and capacitor $C$ resonates at $f_0=\frac1{2\pi\sqrt{LC}}$. Radios use this to pick one station: change $C$ and you change which frequency resonates. Example: $L=10$ mH and $C=100$ nF: $f_0=\frac1{2\pi\sqrt{10^{-2}\times10^{-7}}}\approx5.0$ kHz. The same ideas (natural frequency, driving frequency, damping) describe springs, buildings and circuits.`,
   ["Which component would you vary to tune a radio?", "The capacitance (or the inductance) of the tuned circuit."])
 ],
 base: [
  Q("Resonance occurs when", "the driving frequency equals a natural frequency", ["the driving frequency is much higher than the natural frequency", "the amplitude is zero", "the wave speed doubles"], "Matching frequencies gives large build-up of amplitude."),
  Q("A child on a swing is pushed once every swing, at the right time. The amplitude", "grows large", ["stays the same", "shrinks to zero", "oscillates randomly"], "Well-timed pushes add up."),
  Q("A trombone slide is lengthened and the intensity peaks every 0.20 m. The wavelength is", "0.40 m", ["0.20 m", "0.10 m", "0.80 m"], "Successive maxima are λ/2 apart."),
  Q("More damping makes the resonance peak", "lower and wider", ["taller and narrower", "taller and wider", "move to a higher frequency"], "Damping removes energy so the response is smaller and less selective."),
  Q("Why does a vibrating column of air only produce certain frequencies?", "Only certain frequencies make a standing wave that reinforces itself", ["Air can only vibrate at 340 Hz", "The speed of sound changes with frequency", "Sound cannot reflect"], "Natural frequencies correspond to standing wave patterns."),
  Q("An opera singer's note shatters a glass when her pitch is", "the glass's natural frequency, and the sound is loud", ["much higher than the glass's natural frequency", "the lowest she can sing", "exactly 340 Hz"], "Resonance with a loud source transfers energy to the glass until it fails."),
  Q("A bridge starts swaying dangerously because walkers' steps match its natural frequency. Engineers fix it by adding", "dampers", ["more walkers", "a louder source", "a thinner deck"], "Damping removes energy so the vibration cannot build up."),
  Q("A tuned LC circuit in a radio resonates at", "f = 1/(2π√(LC))", ["f = LC", "f = 340/L", "f = 2LC"], "That is the natural frequency of the circuit; change C to tune."),
  Q("A musical instrument tube resonates at its", "natural frequencies (harmonics)", ["any frequency you supply", "only frequencies above 20 kHz", "the speed of sound"], "Only the natural frequencies build up strongly.")
 ] });
GEN.w9 = [
 () => { const d = P([0.10, 0.17, 0.25, 0.34, 0.5]); return mk(`In a resonance-tube experiment successive maxima are ${d} m apart (v = 340 m/s). The frequency of the source is`, fx(340 / (2 * d), 0) + " Hz", [fx(340 / d, 0) + " Hz", fx(340 / (4 * d), 0) + " Hz", fx(340 * d, 0) + " Hz"], `$\\lambda=2d=${2 * d}$ m so $f=340/${2 * d}$.`); }
];

// ---------------------------------------------------------------- w10
COURSE.push({ id: "w10", t: "Interference of sound (bonus: used in Light and Matter)", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Interference</b>: what happens when two waves overlap. <b>Constructive</b>: they add to make a bigger wave (louder sound). <b>Destructive</b>: they cancel (quieter or silent). <b>In phase</b>: crests lined up with crests. <b>Path difference</b>: how much further one wave travelled than the other. <b>Nodal line</b>: a line of quiet; <b>antinodal line</b>: a line of loud.`,
   ["Do two crests meeting make a louder or quieter sound?", "Louder (constructive)."]),
 T(1, String.raw`<b>The idea.</b> Interference is just superposition. If two waves arrive crest-on-crest the displacements add; if crest meets trough they cancel.`, null, null, "interference"),
 T(2, String.raw`<b>Two speakers.</b> Two speakers play the same note in phase. At a point P the waves arrive having travelled different distances. The <b>path difference</b> is $\Delta=|d_2-d_1|$.<br>• $\Delta=n\lambda$ ($n=0,1,2,\ldots$): crests meet crests: <b>loud</b> (antinodal line).<br>• $\Delta=(n-\frac12)\lambda$ ($n=1,2,\ldots$): crest meets trough: <b>quiet</b> (nodal line).<br>The centre line, equidistant from both speakers, has $\Delta=0$: always loud.`,
   ["Path difference is 1.5 λ. Loud or quiet?", "Quiet: 1.5λ = (2 − ½)λ."],
   ["Assuming every point is loud. Always find the path difference first."]),
 T(2, String.raw`<b>Worked example.</b> From speaker 1 the distance to P is $3.5\lambda$ and from speaker 2 it is $4\lambda$. $\Delta=0.5\lambda$, so P is on the first nodal line: quiet. For Q: $5\lambda-3.5\lambda=1.5\lambda$, the second nodal line: also quiet.<br><b>Effect of wavelength:</b> shorter wavelength means more nodal lines closer together.`,
   ["Distances 6.0 m and 7.0 m, λ = 1.0 m. Loud or quiet?", "Δ = 1.0 m = 1λ: loud."]),
 T(2, String.raw`<b>Noise-cancelling headphones.</b> A microphone picks up the outside noise; the electronics play the <i>upside-down</i> wave through the speaker so that the noise and the cancelling wave meet crest-to-trough and destructive interference removes most of the noise. It works best for steady low-frequency noise (engine hum).`,
   ["What must the headphone's cancelling wave be?", "The same frequency and amplitude as the noise, but inverted (half a cycle out of phase)."]),
 T(3, String.raw`<b>Stretch.</b> The two-source pattern is the sound version of Young's double slit for light, $\Delta x=\frac{\lambda L}{d}$ (see the physics lessons of the main course). Interference also explains 'dead spots' in badly laid out concert halls and why speaker spacing matters.`)
 ],
 base: [
  Q("Two waves meet crest to crest. This is", "constructive interference", ["destructive interference", "diffraction", "reflection"], "Displacements add to give a larger wave."),
  Q("Two speakers play the same note in phase. A point has path difference 2λ. The sound is", "loud", ["quiet", "silent", "inaudible because of cancelling"], "Whole-number λ means crests align."),
  Q("A point has path difference 0.5λ. The sound is", "quiet", ["loud", "twice as loud", "unchanged"], "Crest meets trough: destructive."),
  Q("The path difference from the speakers is 2.5 m and λ = 1.0 m. The sound is", "quiet", ["loud", "unchanged", "ultrasound"], "2.5 λ = (3 − ½) λ."),
  Q("Shortening the wavelength of the sound gives", "more nodal lines", ["fewer nodal lines", "no nodal lines", "wider antinodal lines only"], "More wavelengths fit into the path difference."),
  Q("Noise-cancelling headphones produce", "a copy of the noise, inverted", ["the same wave, in phase", "a louder noise", "silence by switching off"], "Destructive interference: opposite phase cancels."),
  Q("A point on the centre line is the same distance from both in-phase speakers. The sound is", "loud", ["quiet", "zero", "depends on the frequency only"], "Δ = 0, so constructive interference."),
  Q("Interference is an example of", "superposition", ["reflection", "absorption", "resonance only"], "Adding displacements of waves in the same place.")
 ] });
GEN.w10 = [
 () => { const l = P([0.5, 1.0, 2.0]), a = P([6, 8, 10]), n = P([0, 1, 2, 3]), half = P([false, true]); const d2 = a + (n + (half ? 0.5 : 0)) * l; return mk(`In-phase speakers emit sound of wavelength ${l} m. P is ${a} m from one and ${fx(d2, 2)} m from the other. At P the sound is`, half ? "quiet" : "loud", [half ? "loud" : "quiet", "unchanged by interference", "twice the frequency"], `Δ = ${fx(d2 - a, 2)} m = ${fx((d2 - a) / l, 1)} λ, ${half ? "a half-number of wavelengths: destructive." : "a whole number of wavelengths: constructive."}`); }
];

// ---------------------------------------------------------------- w11
COURSE.push({ id: "w11", t: "Diffraction: why you hear around corners", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Diffraction</b>: the bending and spreading of a wave as it passes through a gap or around an obstacle. <b>Gap/aperture width</b> ($w$): how wide the opening is. <b>Shadow</b>: a region the wave doesn't reach. <b>Ratio $\frac\lambda w$</b>: wavelength divided by gap width (or obstacle size); it decides how much the wave bends.`,
   ["Does diffraction change the wave's frequency or speed?", "No. Speed, frequency and wavelength stay the same; only the direction changes."]),
 T(1, String.raw`<b>Everyday clue.</b> You can hear someone talking around a corner or through a doorway, but you cannot <i>see</i> them. Both sound and light are waves, but sound has a wavelength of centimetres to metres (comparable to a doorway) while light's wavelength is about half a micrometre (far smaller than a doorway). Waves bend a lot when their wavelength is comparable to or bigger than the opening, and hardly at all when it is much smaller.`,
   ["Why can you hear but not see around a corner?", "Sound's wavelength is comparable to the gap so it diffracts strongly; light's wavelength is tiny so it hardly bends."]),
 T(2, String.raw`<b>The rule.</b> $$\frac\lambda w\ \gtrsim\ 1:\ \text{strong spreading (almost semicircular)}$$ $$\frac\lambda w\approx1:\ \text{partial spreading}\qquad\frac\lambda w\ll1:\ \text{very little: a beam with a sharp shadow}$$ Long wavelengths (low frequencies) diffract a lot; short wavelengths (high frequencies) form beams. A big obstacle ($w\gg\lambda$) casts a sound shadow; a small obstacle ($w\ll\lambda$) barely disturbs the wave.`,
   ["Which diffracts more through a door: 100 Hz or 5000 Hz?", "100 Hz (longer wavelength)."],
   ["Thinking higher frequencies bend more. Lower frequencies (longer λ) bend more."], "diffraction"),
 T(2, String.raw`<b>Do the numbers.</b> Use $\lambda=\frac vf$ then compare with $w$.<br>A door $w=1.0$ m wide: $340$ Hz gives $\lambda=1.0$ m, $\frac\lambda w=1$: strong spreading. $3400$ Hz gives $\lambda=0.10$ m, $\frac\lambda w=0.1$: a beam. So someone off to the side of the door hears the bass notes clearly but the treble much softer (frequencies above roughly 1000 Hz are strongly reduced).`,
   ["A 0.30 m gap. Which of 100 Hz, 1000 Hz, 10 000 Hz gives almost a straight beam?", "10 000 Hz: λ = 0.034 m ≪ 0.30 m."]),
 T(2, String.raw`<b>Obstacles and shadows (Tino's experiment).</b> A 17 kHz tone has $\lambda=\frac{340}{17000}=0.020$ m, far smaller than his 0.3 m body, so there is a sound shadow and a sound-level meter behind him drops a lot. At 170 Hz, $\lambda=2.0$ m, much bigger than his body, so the wave bends around and the meter barely changes.`,
   ["Which gives a bigger shadow behind a person: 500 Hz or 5000 Hz?", "5000 Hz (shorter wavelength)."]),
 T(2, String.raw`<b>Speakers and hearing.</b> A small tweeter (12 cm) sends high notes ($6000$ Hz, $\lambda=0.057$ m) in a narrow beam, so someone off-axis hears them softly. Big woofers handle low notes, which spread widely. That's why speaker systems use several drivers and why you hear bass everywhere in a house but the treble only if you are in line with the speaker.`,
   ["What is λ for a 6000 Hz sound?", "$340/6000=0.057$ m."]),
 T(2, String.raw`<b>Worked example: a 0.30 m gap.</b> $100$ Hz: $\lambda=3.4$ m, $\frac\lambda w\approx11$, spreads almost everywhere. $1000$ Hz: $\lambda=0.34$ m, $\frac\lambda w\approx1.1$, partial spreading. $10\,000$ Hz: $\lambda=0.034$ m, $\frac\lambda w\approx0.11$, a narrow beam, so a listener who walks past the gap would hear a sudden drop at the edge of the beam. A prediction of a sharply defined 'beam of sound' is only nearly correct for the highest frequency.`),
 T(3, String.raw`<b>Safe and responsible practices with sound.</b> Keep the volume as low as practical; stay at a distance (−6 dB per doubling of distance); limit exposure time; use hearing protection; avoid headphones at high volume; turn equipment down before switching on; keep leads and amplifiers safe from liquids; avoid microphone feedback (it can produce painfully loud, high-frequency screeches); and give your ears quiet time to recover.`,
   ["Name two ways to reduce your exposure to loud sound.", "e.g. move further away, wear ear protection, limit the time."])
 ],
 base: [
  Q("Diffraction is", "the bending of waves around obstacles or through gaps", ["the bouncing of waves off a surface", "the adding of two waves", "the slowing of a wave in a new medium"], "Bending or spreading of waves."),
  Q("When a wave diffracts, which quantity changes?", "its direction of travel", ["its speed", "its frequency", "its wavelength"], "In the same medium, speed, frequency and wavelength stay the same."),
  Q("Which of these diffracts MOST through a doorway?", "A 100 Hz tone", ["A 1000 Hz tone", "A 10 000 Hz tone", "Light"], "Longest wavelength gives biggest λ/w."),
  Q("The ratio λ/w is much less than 1. The wave", "forms a beam with little spreading", ["spreads out strongly", "is completely reflected", "stops"], "Wavelength much smaller than the gap: little diffraction."),
  Q("The wavelength of 3400 Hz sound in air is", "0.10 m", ["10 m", "1.0 m", "0.01 m"], "$340/3400=0.10$ m."),
  Q("A person standing behind a large obstacle hears low notes clearly but not high notes because", "low frequencies have a long wavelength and diffract around it", ["low notes are louder", "high notes are absorbed by air only", "high notes are reflected back at the speaker"], "Long wavelengths bend more."),
  Q("You can hear but not see around a corner because", "sound has a much longer wavelength than light", ["sound is faster", "light is absorbed by air", "sound is a transverse wave"], "Sound's λ is comparable to everyday gaps; light's is tiny."),
  Q("A 0.30 m gap. Which frequency gives the most beam-like sound?", "10 000 Hz", ["100 Hz", "1000 Hz", "10 Hz"], "Shortest wavelength: λ/w ≈ 0.11."),
  Q("Which is a safe practice around loud sound sources?", "Move further away and limit the exposure time", ["Stand next to the speaker", "Increase volume to check it works", "Use only one earplug"], "Lower levels and less time protect hearing.")
 ] });
GEN.w11 = [
 () => { let f, w, r; do { f = P([170, 340, 680, 1700, 3400]); w = P([0.2, 0.5, 1.0]); r = 340 / f / w; } while (Math.abs(r - 1) < 0.01 || fx(r, 2) === fx(1 / r, 2)); return mk(`Sound of frequency ${f} Hz (v = 340 m/s) goes through a gap ${w} m wide. The ratio λ/w is`, fx(r, 2), [fx(1 / r, 2), fx(f / w, 0), fx(340 * w / f, 2)], `λ = 340/${f} = ${fx(340 / f, 3)} m, and λ/w = ${fx(r, 2)}.`); },
 () => { const f = P([100, 200, 500, 2000, 5000, 10000]); return mk(`A doorway is 0.90 m wide. Compared with a 200 Hz sound, a ${f} Hz sound spreads`, f > 200 ? "less (more beam-like)" : f < 200 ? "more" : "equally", [f > 200 ? "more" : "less (more beam-like)", "equally", "faster"], `Higher frequency means shorter wavelength and less diffraction.`); }
];

// ---------------------------------------------------------------- w12
COURSE.push({ id: "w12", t: "Sound as a signal: microphones, sampling and filters (Systems Engineering link)", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Signal</b>: a voltage that changes with time to carry information. <b>Analogue</b>: varies smoothly. <b>Digital</b>: a list of numbers. <b>Sampling</b>: measuring the voltage at regular times. <b>Sample rate</b> ($f_s$): samples per second. <b>Bandwidth</b>: the range of frequencies in a signal. <b>Filter</b>: a circuit that passes some frequencies and blocks others.`,
   ["What is a transducer? Give two.", "A device that converts energy from one form to another, e.g. a microphone and a speaker."]),
 T(1, String.raw`<b>Sound to voltage.</b> A microphone turns a pressure wave into a voltage wave. The voltage-time graph has the same shape as the pressure-time graph, so everything you learnt (frequency, period, amplitude, loudness) applies to electrical signals too. A speaker converts the voltage back into pressure.`),
 T(2, String.raw`<b>Frequency ranges.</b> Human hearing: about 20 Hz to 20 kHz. Telephone speech: roughly 300 Hz to 3400 Hz. A <b>low-pass filter</b> passes low frequencies and blocks high ones (like walls and doors blocking treble), a <b>high-pass filter</b> does the opposite, and a <b>band-pass filter</b> passes a band.`,
   ["A filter removes hiss (high frequency). Which type is it?", "A low-pass filter."]),
 T(2, String.raw`<b>Digitising: sampling.</b> A computer can't store a smooth curve, so it measures the voltage many times a second. <b>Nyquist rule:</b> to capture a signal properly, $$f_s>2f_{max}.$$ CDs use $44\,100$ samples/s because the highest frequency we hear is about 20 kHz and $2\times20\,000=40\,000<44\,100$. Sampling too slowly causes <b>aliasing</b>: a fake slower wave appears.`,
   ["Highest frequency in a signal is 8 kHz. What minimum sample rate is needed?", "More than 16 kHz."],
   ["Sampling at exactly the signal frequency. You need more than twice the highest frequency."], "nyquist"),
 T(2, String.raw`<b>Worked examples.</b><br>(1) A system samples at $10$ kHz. The highest frequency it can capture is $\frac{10}2=5$ kHz.<br>(2) Data rate of CD audio: $44\,100\times16\text{ bits}\times2\text{ channels}=1\,411\,200$ bits/s $\approx1.4$ Mbit/s.<br>(3) How many levels in a 16-bit sample? $2^{16}=65\,536$.`,
   ["How many levels with an 8-bit sample?", "$2^8=256$."]),
 T(2, String.raw`<b>Harmonics are a signal idea too.</b> A real note (violin, flute, voice) is a fundamental plus harmonics at $2f_1,3f_1,\ldots$ added together. Breaking a sound into its sine-wave parts is called <b>Fourier analysis</b>, and it is how audio software, equalisers and noise filters work. This links to the 'Signals, filters and Fourier' lesson in the main Monash course.`),
 T(3, String.raw`<b>Stretch: filters from circuits.</b> An RC low-pass filter has cut-off frequency $f_c=\frac1{2\pi RC}$. Example: $R=1.6$ kΩ and $C=100$ nF give $f_c\approx\frac1{2\pi(1600)(10^{-7})}\approx995$ Hz $\approx1$ kHz. Frequencies well above $f_c$ are strongly reduced, which is how you remove hiss from a sensor or audio signal.`,
   ["R = 1 kΩ, C = 1 µF. Find f_c.", "$1/(2\\pi\\times10^3\\times10^{-6})\\approx159$ Hz."])
 ],
 base: [
  Q("A microphone is a", "transducer", ["filter", "memory", "resonator only"], "It converts sound to an electrical signal."),
  Q("Human hearing covers roughly", "20 Hz to 20 kHz", ["200 Hz to 2 kHz", "2 Hz to 200 Hz", "20 kHz to 200 kHz"], "Standard range of hearing."),
  Q("A signal has highest frequency 5 kHz. The minimum sampling rate must be above", "10 kHz", ["5 kHz", "2.5 kHz", "20 kHz"], "Nyquist: more than twice the highest frequency."),
  Q("A system samples at 8 kHz. The highest frequency it can capture correctly is", "4 kHz", ["8 kHz", "16 kHz", "2 kHz"], "$f_s/2$."),
  Q("Sampling too slowly produces", "aliasing (a false slower wave)", ["louder sound", "a higher sample rate", "a shorter wavelength"], "The samples seem to show a lower frequency wave."),
  Q("A low-pass filter", "passes low frequencies and blocks high ones", ["passes high frequencies only", "amplifies everything", "delays the signal"], "That is its definition."),
  Q("A 16-bit sample can represent how many levels?", "65 536", ["16", "256", "1 600"], "$2^{16}=65\\,536$."),
  Q("Why does a CD use a 44.1 kHz sample rate?", "It is more than twice the 20 kHz limit of human hearing", ["Because 44.1 kHz is the speed of sound", "To make the file bigger", "Because the voltage is 44.1 V"], "Nyquist rule for a 20 kHz limit."),
  Q("A note on an instrument is made of", "a fundamental plus harmonics", ["only one sine wave always", "random noise", "only the fundamental"], "Real sounds are sums of harmonics (Fourier).")
 ] });
GEN.w12 = [
 () => { const f = P([2, 4, 5, 8, 10, 20]); return mk(`A signal contains frequencies up to ${f} kHz. A safe sample rate must be above`, 2 * f + " kHz", [f + " kHz", f / 2 + " kHz", 4 * f + " kHz"], `Nyquist: above 2 × ${f} kHz.`); },
 () => { const fs = P([8, 10, 16, 40, 44.1]); return mk(`A system samples at ${fs} kHz. The highest frequency it can capture is`, fs / 2 + " kHz", [fs + " kHz", fs * 2 + " kHz", fs / 4 + " kHz"], `$f_s/2$.`); },
 () => { const b = P([8, 10, 12, 16]); return mk(`A ${b}-bit sample can represent how many different levels?`, String(Math.pow(2, b)), [String(b * b), String(b * 100), String(Math.pow(2, b - 1))], `$2^{${b}}=${Math.pow(2, b)}$.`); }
];

// ---------------------------------------------------------------- modules
COURSE.forEach(c => { c.otText = "<b>Common mistakes</b><br>" + c.steps.flatMap(s => s[4] || []).map(x => "• " + x).join("<br>"); });
const MODS = [
 { t: "Module 1 · Waves and sound", ids: ["w1", "w2", "w3"], intro: "What a wave is, how to describe one with five numbers, and how sound is a pressure wave. Everything later is built from these ideas, so take your time here." },
 { t: "Module 2 · Loudness", ids: ["w4", "w5"], intro: "Intensity, the inverse square law and decibels: why sound gets quieter with distance and how to calculate by how much." },
 { t: "Module 3 · Standing waves and resonance", ids: ["w6", "w7", "w8", "w9"], intro: "How strings and pipes make notes: nodes, harmonics, open and closed pipes, and resonance." },
 { t: "Module 4 · Interference and diffraction", ids: ["w10", "w11"], intro: "What happens when waves overlap or meet gaps: loud and quiet spots, and why you can hear around corners." },
 { t: "Module 5 · Sound meets electronics", ids: ["w12"], intro: "Microphones, sampling and filters: the sound ideas you will use again in Systems Engineering." }
];
const ORDER = MODS.flatMap(m => m.ids);
const ORDM = MODS.map((_, i) => i);
const IMG = {};
COURSE.forEach(c => regen(c));
