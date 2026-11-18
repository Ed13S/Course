// Sound & Waves course. Lessons are in course.js, course2.js, course3.js (loaded in that order).
// steps: [level, html, image, check, mistakes]   level 1 = foundation, 2 = core, 3 = stretch
const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1)), P = a => a[Math.floor(Math.random() * a.length)];
const sh = a => [...a].sort(() => Math.random() - .5), fx = (n, d = 2) => String(+n.toFixed(d));
function mk(q, ans, wr, e) { ans = String(ans); const w = [...new Set(wr.map(String))].filter(x => x !== ans).slice(0, 3); const o = sh([ans, ...w]); return { q, o, a: o.indexOf(ans), e }; }
function sci(x) { const e = Math.floor(Math.log10(x) + 1e-9), m = x / Math.pow(10, e); return "$" + (+m.toFixed(1)) + "\\times10^{" + e + "}$"; }
const T = (lv, h, ck, mkk, img) => [lv, h, img || null, ck || null, mkk || []];
const Q = (q, a, w, e) => { const o = sh([a, ...w]); return { q, o, a: o.indexOf(a), e }; };
const GEN = {};
function regen(c) {
  const base = c.base.map(q => { const ans = q.o[q.a], o = sh(q.o); return { ...q, o, a: o.indexOf(ans) }; });
  const gen = (GEN[c.id] || []).map(f => f());
  c.qs = sh([...base, ...gen]);
}
const COURSE = [];

// ---------------------------------------------------------------- w1
COURSE.push({ id: "w1", t: "What is a wave? Transverse and longitudinal", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Wave</b>: a disturbance that travels from place to place and carries <i>energy</i>. <b>Medium</b>: the stuff the wave travels through (air, water, a rope, a slinky). <b>Particle</b>: one tiny bit of the medium (an air molecule, a bit of rope). <b>Rest position</b> (equilibrium): where a particle sits when there is no wave. <b>Vibrate</b>: move back and forth about the rest position. <b>Energy</b>: the ability to make things happen, such as making your eardrum move. Remember these five words and everything else in this course gets easier.`,
   ["In a stadium 'Mexican wave', what travels around the stadium: the people or the pattern?", "The pattern. Each person only stands up and sits down in their own seat."]),
 T(1, String.raw`<b>The big idea: a wave carries energy, not matter.</b> Tie a rope to a door handle and flick your end. A bump runs along the rope to the door, but no piece of rope runs to the door. Every bit of rope just moves up and down a little and passes the bump on to its neighbour, like a line of dominoes. Floating on the sea, a cork bobs up and down while the waves roll past it to the beach. The wave moves; the cork stays about where it was.`,
   ["A wave passes under a floating duck. At the end, where is the duck?", "About where it started. It bobbed, but the wave did not carry it along."],
   ["Thinking the material (rope, water, air) travels along with the wave. Only the disturbance and its energy travel."]),
 T(1, String.raw`<b>Two types of wave.</b> What matters is the direction the particles shake compared with the direction the wave travels.<br>• <b>Transverse</b>: particles move <i>across</i> (at right angles to) the direction of travel. Flick a rope sideways, ripples on water, and light.<br>• <b>Longitudinal</b>: particles move <i>along</i> (parallel to) the direction of travel. Push and pull a slinky along its length. <b>Sound is longitudinal.</b><br>Memory trick: <b>Trans</b>verse = <b>trans</b>port the shake <b>across</b>. <b>Long</b>itudinal = shake <b>along</b>.`,
   ["Which type of wave is sound?", "Longitudinal: air particles vibrate back and forth along the direction the sound travels."],
   ["Mixing up the two names. Ask: which way do the particles shake compared with the way the wave moves?"], "wave_types"),
 T(2, String.raw`<b>Sound needs a medium.</b> A sound wave is air particles bumping their neighbours: a vibrating object (speaker, vocal cords, guitar string) pushes the nearby air, that air pushes the next air, and so on. No particles means no sound, so <b>sound cannot travel through a vacuum</b> (a bell ringing inside a jar with the air pumped out goes silent). Light is different: it needs no medium, which is why we see the Sun but cannot hear it. In air at room temperature sound travels at about $340\ \text{m/s}$. It is faster in liquids and solids (about $1500$ m/s in water, over $5000$ m/s in steel) because the particles are closer together and pass the push on sooner.`,
   ["Explosions in space in movies make a loud bang. Why is that wrong?", "There is almost no air in space, so there is no medium to carry the sound."],
   ["Saying sound travels in space. It needs particles to vibrate."]),
 T(2, String.raw`<b>What actually moves in a sound wave?</b> Picture a speck of dust floating in front of a speaker that is playing a note. The speaker pushes and pulls the air, so the dust speck is shoved forwards and backwards, <i>along the line from the speaker</i>, in time with the sound. It does <b>not</b> drift away from the speaker. Its average position stays put. A candle flame in front of a speaker flickers towards and away from the speaker at the same frequency as the sound (10 Hz sound gives 10 flickers a second). A very light spider web hanging in front of a speaker does the same: it moves back and forth <i>towards and away from</i> the speaker (not up and down) about a fixed average distance.<br>Why? The <b>wave</b> travels outwards carrying energy, while each air particle just vibrates in place.`,
   ["A dust speck is in front of a speaker playing a steady note. Describe its motion in one sentence.", "It vibrates back and forth horizontally, towards and away from the speaker, at the sound's frequency, about a fixed average position."],
   ["Saying the dust is blown away along with the sound. Sound is a wave: no net movement of the medium."]),
 T(2, String.raw`<b>How you hear, and how a microphone works.</b> Vibrating air makes your eardrum vibrate; tiny bones pass the vibration on; the inner ear turns it into electrical signals; your brain decides 'that is a flute'. A <b>microphone</b> does almost the same job: sound makes a thin diaphragm vibrate and the movement is turned into a changing voltage. A speaker does the reverse (voltage in, vibration out). Anything that converts one form of energy into another is a <b>transducer</b>, an important word in Systems Engineering.`,
   ["What is a transducer? Name one in this step.", "A device that changes energy from one form to another, e.g. a microphone (sound to electrical) or a speaker."]),
 T(2, String.raw`<b>Worked example (VCE style).</b> <i>A student says: 'When I shout, the air leaves my mouth and rushes across the room to your ear.' Explain what is wrong.</i><br><b>Model answer:</b> Sound is a longitudinal wave. My vocal cords make the nearby air vibrate; those air particles vibrate back and forth about their rest positions and pass the energy to the next particles. The compressions and rarefactions travel across the room, but there is no net movement of air. Only the energy and the pattern arrive at your ear.<br>Notice the answer names the wave type, says what the particles do, and says what travels. Explain questions are worth more marks, so say each of these.`),
 T(3, String.raw`<b>Reflection, absorption and transmission.</b> When sound hits a surface some is <b>reflected</b> (bounces), some is <b>absorbed</b> (turned to heat inside the material) and some is <b>transmitted</b> (passes through). Hard smooth surfaces (glass, tiles, polished wood) reflect a lot, which is why your voice sounds great in the shower. Soft porous surfaces (carpet, curtains) absorb, which is why carpeted rooms are quieter and concert halls use absorbers to stop echoes. Thick concrete walls transmit little, so freeways use them as sound barriers. Sound obeys the <b>law of reflection</b>: angle of incidence = angle of reflection, both measured from the normal (the line at right angles to the surface).`,
   ["Why is a carpeted classroom quieter than one with a wooden floor?", "Carpet is porous and absorbs sound, so less is reflected back into the room."])
 ],
 base: [
  Q("Which statement about a wave is correct?", "It transfers energy without transferring matter", ["It transfers matter but not energy", "It transfers both matter and energy", "It transfers neither"], "A wave carries energy from place to place; the medium only vibrates about its rest position."),
  Q("In a longitudinal wave the particles vibrate:", "parallel to the direction the wave travels", ["at right angles to the direction of travel", "in circles", "in no particular direction"], "Longitudinal = along. Think of a slinky pushed and pulled."),
  Q("Which of these is a transverse wave?", "A wave on a rope shaken sideways", ["Sound in air", "A slinky pushed and pulled along its length", "A pressure wave from a speaker"], "Sound and a pushed slinky are longitudinal. A rope shaken sideways moves across the travel direction."),
  Q("A dust speck sits still in the air in front of a loudspeaker. The speaker is switched on. The best description of the dust is that it", "vibrates back and forth, towards and away from the speaker", ["vibrates up and down", "moves steadily away from the speaker", "stays completely at rest"], "Sound is a longitudinal wave, so particles vibrate along the direction of travel, about a fixed average position."),
  Q("Why can't sound travel through a vacuum?", "There are no particles to vibrate and pass the energy on", ["The vacuum is too cold", "Sound is too slow", "Sound is a transverse wave"], "A sound wave is made of vibrating particles. With none, there is nothing to carry it."),
  Q("A floating cork bobs up and down as water waves pass. After a long time the cork is", "near where it started", ["at the shore", "far out at sea", "at the bottom"], "Waves carry energy, not matter. The cork only moves about its average position."),
  Q("Roughly how fast does sound travel in air?", "340 m/s", ["34 m/s", "3400 m/s", "300 000 000 m/s"], "About 340 m/s, much slower than light."),
  Q("A microphone is an example of a", "transducer", ["resistor", "medium", "longitudinal wave"], "It converts sound energy into electrical signals."),
  Q("Which surface would absorb the MOST sound?", "A thick curtain", ["A glass window", "A tiled wall", "A polished floor"], "Soft porous materials absorb. Hard smooth ones reflect."),
  Q("A sound wave hits a wall at 30° to the normal. It reflects at", "30° to the normal on the other side", ["60° to the normal", "90° to the normal", "0°, straight back"], "Angle of incidence equals angle of reflection.")
 ] });
GEN.w1 = [
 () => { const d = P([170, 340, 680, 1020]); return mk(`How long does sound (340 m/s) take to travel ${d} m in air?`, fx(d / 340) + " s", [fx(d * 340, 0) + " s", fx(340 / d) + " s", fx(d / 340 * 2) + " s"], `time = distance ÷ speed = ${d} ÷ 340.`); }
];

// ---------------------------------------------------------------- w2
COURSE.push({ id: "w2", t: "Describing a wave: amplitude, wavelength, frequency, period, speed", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Cycle</b>: one complete repeat of the wave pattern. <b>Crest</b>: the top of a wave; <b>trough</b>: the bottom. <b>Amplitude</b> (A): how far from the rest line to a crest. <b>Wavelength</b> ($\lambda$, the Greek letter 'lambda'): the length of one cycle, e.g. crest to the next crest, in <b>metres</b>. <b>Period</b> ($T$): the <i>time</i> for one cycle, in <b>seconds</b>. <b>Frequency</b> ($f$): how many cycles happen <i>each second</i>, in <b>hertz</b> (Hz). <b>Speed</b> ($v$): how fast the pattern travels, in m/s.`,
   ["A guitar string vibrates 440 times each second. What is its frequency?", "440 Hz."]),
 T(1, String.raw`<b>Draw it.</b> The left graph is a frozen photo of the wave along its length: from it you read the <b>wavelength</b> (crest to crest) and the <b>amplitude</b> (rest line to crest; crest-to-trough is <i>twice</i> the amplitude). The right graph follows <i>one single spot</i> over time, like a video of a cork: from it you read the <b>period</b> (time from one crest to the next).`,
   ["A graph has 'distance' along the bottom. Does the gap between crests give you the wavelength or the period?", "The wavelength. Gaps in distance give wavelength; gaps in time give period."],
   ["Reading a wavelength off a time graph, or a period off a distance graph. Always check what is on the horizontal axis first."], "wave_anatomy"),
 T(1, String.raw`<b>Frequency and period are 'flips' of each other.</b> $$f=\frac1T\qquad T=\frac1f$$ If a source vibrates 5 times a second ($f=5$ Hz), each cycle takes $\frac15=0.2$ s. If one cycle takes $0.002$ s, then in one second you fit $\frac1{0.002}=500$ cycles, so $f=500$ Hz. Higher frequency means a shorter period.`,
   ["A wave has period 0.04 s. What is its frequency?", "$1\\div0.04=25$ Hz."],
   ["Forgetting the units: f is in Hz (per second), T in seconds. 5 ms is 0.005 s, not 5 s."]),
 T(2, String.raw`<b>The wave equation.</b> $$v=f\lambda$$ Why? In one second, $f$ cycles go past and each cycle is $\lambda$ metres long, so the pattern moves $f\times\lambda$ metres each second. Example: sound at 340 m/s with wavelength 2 m: $340=f\times2$ so $f=170$ Hz. Example: a slinky vibrated at 5.0 Hz makes waves 0.40 m long, so $v=5.0\times0.40=2.0$ m/s. To use it, write the formula, put in the numbers, then rearrange: $f=\frac v\lambda$ and $\lambda=\frac vf$.`,
   ["A wave has f = 50 Hz and λ = 6.8 m. What is its speed?", "$50\\times6.8=340$ m/s."],
   ["Using the period in v = fλ. If you are given T, first turn it into f = 1/T.", "Mixing units: convert cm to m and kHz to Hz first."]),
 T(2, String.raw`<b>Reading graphs: which one gives you what?</b> A pressure (or displacement) graph <i>against distance</i> gives $\lambda$. A graph <i>against time</i> gives $T$, and then $f=1/T$. To find the speed you need both, so you may need to read one from each graph.<br><b>Worked example.</b> A microphone records a flute: the pressure-time graph repeats every $0.0020$ s. So $f=\frac1{0.0020}=500$ Hz. The question says the wavelength is $0.70$ m, so $v=500\times0.70=350$ m/s.`,
   ["A time graph shows crests 0.01 s apart. Find f.", "$T=0.01$ s so $f=100$ Hz."]),
 T(2, String.raw`<b>More worked examples.</b><br>(1) <i>Successive compressions reach Kylie's ear 5 ms apart.</i> That is the period: $T=0.005$ s, so $f=\frac1{0.005}=200$ Hz.<br>(2) <i>Ashley beats a drum 2 times a second; Pat walks away until he hears each beat exactly as Ashley hits the NEXT one. He is 167 m away.</i> The sound takes $0.5$ s (the gap between beats), so $v=\frac dt=\frac{167}{0.5}=334$ m/s.<br>(3) <i>Wave speed $=\text{distance}\div\text{time}$ also works for any steady wave.</i>`,
   ["A drummer beats 4 times a second and you hear each beat exactly as the next is struck, from 85 m away. Speed of sound?", "Gap = 0.25 s, so $v=85\\div0.25=340$ m/s."]),
 T(2, String.raw`<b>What changes what?</b> <b>Pitch</b> is set by frequency (high f = high note). <b>Loudness</b> is set by amplitude (big A = loud). The <b>source</b> decides the frequency. The <b>medium</b> decides the speed. Since $v=f\lambda$, in the same medium, if the frequency goes up the wavelength must shrink: $\lambda=v/f$. If a wave moves into a different medium, its frequency stays the same but its speed and wavelength both change.`,
   ["In air, the frequency of a note is doubled. What happens to its wavelength?", "It halves, because v stays the same and $\\lambda=v/f$."],
   ["Thinking louder sound travels faster or has a different wavelength. Loudness is amplitude only."]),
 T(3, String.raw`<b>Stretch: how big are sound waves?</b> Humans hear 20 Hz to 20 000 Hz. Using $\lambda=v/f$ with $v=340$ m/s: at 20 Hz $\lambda=17$ m (as long as a bus) and at 20 000 Hz $\lambda=0.017$ m (1.7 cm). So low notes have huge waves and high notes tiny ones. This size matters later for diffraction and for pipes. Unit tips: $1\ \text{kHz}=1000$ Hz, $1\ \text{ms}=0.001$ s, $1\ \text{cm}=0.01$ m.`,
   ["What is the wavelength of a 1000 Hz tone in air?", "$340\\div1000=0.34$ m."])
 ],
 base: [
  Q("The frequency of a wave is", "the number of cycles each second", ["the length of one cycle", "the time of one cycle", "the height of the wave"], "Frequency is cycles per second, measured in hertz."),
  Q("A wave has a period of 0.020 s. Its frequency is", "50 Hz", ["0.020 Hz", "20 Hz", "500 Hz"], "$f=1/T=1/0.020=50$ Hz."),
  Q("On a pressure-DISTANCE graph, the distance between two neighbouring peaks is the", "wavelength", ["period", "frequency", "amplitude"], "Distance between repeats = wavelength."),
  Q("On a pressure-TIME graph for one spot, the time between two neighbouring peaks is the", "period", ["wavelength", "speed", "amplitude"], "Time between repeats = period."),
  Q("A sound has frequency 170 Hz and wavelength 2.0 m. Its speed is", "340 m/s", ["85 m/s", "172 m/s", "0.012 m/s"], "$v=f\\lambda=170\\times2.0=340$ m/s."),
  Q("A pure note is played louder without changing its pitch. Which quantity changes?", "amplitude", ["frequency", "wavelength", "speed"], "Loudness is amplitude. Pitch is frequency, and the speed depends on the medium."),
  Q("The frequency of a sound in air doubles. The wavelength", "halves", ["doubles", "stays the same", "quadruples"], "$\\lambda=v/f$ with v fixed, so doubling f halves λ."),
  Q("The time between successive compressions at your ear is 5.0 ms. The frequency is", "200 Hz", ["5.0 Hz", "0.005 Hz", "20 Hz"], "$T=0.0050$ s so $f=1/0.0050=200$ Hz."),
  Q("A slinky is shaken at 5.0 Hz and the wavelength is 0.40 m. The wave speed is", "2.0 m/s", ["12.5 m/s", "0.080 m/s", "0.2 m/s"], "$v=f\\lambda=5.0\\times0.40=2.0$ m/s."),
  Q("The crest-to-trough height of a wave is 8 cm. The amplitude is", "4 cm", ["8 cm", "16 cm", "2 cm"], "Amplitude is from the rest line to a crest: half of crest-to-trough.")
 ] });
GEN.w2 = [
 () => { const f = P([85, 170, 340, 680, 1700]); return mk(`A sound wave in air (v = 340 m/s) has frequency ${f} Hz. Its wavelength is`, fx(340 / f, 3) + " m", [fx(340 * f, 0) + " m", fx(f / 340, 3) + " m", fx(340 / f * 2, 3) + " m"], `$\\lambda=v/f=340/${f}$.`); },
 () => { const f = P([4, 5, 10, 20, 25, 50, 250, 500]); return mk(`A source vibrates at ${f} Hz. Its period is`, fx(1 / f, 4) + " s", [f + " s", fx(2 / f, 4) + " s", fx(1 / (2 * f), 4) + " s"], `$T=1/f=1/${f}$.`); },
 () => { const t = P([2, 4, 5, 10, 20]); return mk(`On an oscilloscope, successive pressure peaks are ${t} ms apart. The frequency is`, fx(1000 / t, 0) + " Hz", [fx(t, 0) + " Hz", fx(1 / t, 3) + " Hz", fx(2000 / t, 0) + " Hz"], `$T=${t}$ ms $=${t / 1000}$ s, so $f=1/T=${1000 / t}$ Hz.`); }
];

// ---------------------------------------------------------------- w3
COURSE.push({ id: "w3", t: "Sound as a pressure wave and reading its graphs", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Pressure</b>: how hard the air pushes on a surface. <b>Normal (atmospheric) pressure</b>: the pressure with no sound. <b>Compression</b> (C): a region where air is squashed together, pressure <i>above</i> normal. <b>Rarefaction</b> (R): a region where air is spread out, pressure <i>below</i> normal. <b>Pressure variation</b>: how far above or below normal the pressure is.`,
   ["Is a compression a region of high or low pressure?", "High pressure (above normal)."]),
 T(1, String.raw`<b>The speaker story.</b> A loudspeaker cone moves forward: it squashes the air in front of it into a <b>compression</b>. It moves back: that air spreads out, leaving a <b>rarefaction</b>. Forward, back, forward, back... and a train of C, R, C, R moves outwards at 340 m/s. Look at the picture: each blue dot is an air particle. The dots bunch up at C and spread out at R. The bunches travel away from the speaker, but each dot only shakes back and forth.`,
   ["What does the speaker cone make when it moves backwards?", "A rarefaction (low pressure) in front of it."],
   null, "sound_particles"),
 T(1, String.raw`<b>Turning the dots into a graph.</b> We draw the <i>pressure variation</i> as a curve: the horizontal line is normal pressure; a <b>peak</b> is a compression (pressure above normal); a <b>trough</b> is a rarefaction (below normal). The graph is NOT a picture of air moving up and down. The air moves along the line of travel; the curve just records how squashed the air is at each place.`,
   ["On a pressure graph, what does a trough represent?", "A rarefaction: pressure lower than normal."],
   ["Reading the sine curve as particles moving up and down. For sound, the curve is pressure."]),
 T(2, String.raw`<b>Pitch and loudness on the graph.</b> Squeeze more waves into the same space (or time) and the frequency is higher: <b>higher pitch</b>. Make the peaks and troughs taller and the pressure variation is bigger: <b>louder</b> sound. Changing the loudness does not change the wavelength, and changing the pitch does not change the speed.`,
   ["A graph's peaks get taller but stay the same distance apart. What changed?", "Loudness (amplitude) increased; pitch and wavelength are the same."]),
 T(2, String.raw`<b>Moving the graph forward in time (a VCE favourite).</b> A pressure-against-<i>distance</i> graph is a snapshot. If the wave travels to the right, the whole pattern slides to the right without changing shape. In a time of $T/4$ it slides $\lambda/4$; in $T/2$ it slides $\lambda/2$; in $T$ it slides a full $\lambda$ and looks the same as before.<br><b>Method:</b> (1) pick a landmark such as a crest; (2) move it right by the right fraction of $\lambda$ (left if the wave goes left); (3) redraw the same curve from there.<br><b>Worked example:</b> the wavelength is $0.60$ m and a crest is at 0. A quarter of a period later it is at $0.60/4=0.15$ m. After half a period the old crest positions hold troughs.`,
   ["A wave moves right, λ = 2.0 m, crest at x = 0. Where is that crest after T/4?", "At $x=2.0/4=0.50$ m."],
   ["Shifting the wrong way. Right-moving waves shift right.", "Shifting by T/4 metres. You shift by λ/4 in distance."], "shift_graph"),
 T(2, String.raw`<b>Echoes (distance, speed, time).</b> Sound has to go to the wall and come back, so $d=\frac{v\,t}{2}$. A shout returns after $0.50$ s: $d=\frac{340\times0.50}{2}=85$ m. Forgetting to halve is the classic mistake.`,
   ["An echo returns after 1.0 s. How far is the cliff?", "$340\\times1.0\\div2=170$ m."],
   ["Using the whole time as the one-way time. Halve it."]),
 T(3, String.raw`<b>Stretch: where are the particles when the pressure is biggest?</b> Between a compression's two sides the particles are pushed together, so near the centre of a compression the particles are at their <i>rest</i> positions (they are not displaced) but moving fastest, and the pressure variation is at its maximum. Where particles are furthest from rest, the pressure variation is zero. So the pressure graph and the displacement graph are a quarter of a cycle apart. You only need this for harder questions.`,
   ["At the centre of a compression, is the pressure variation maximum or zero?", "Maximum."])
 ],
 base: [
  Q("A region where the air is squashed together is called a", "compression", ["rarefaction", "node", "crest only"], "Compression = high pressure, particles close together."),
  Q("At the centre of a rarefaction the pressure is", "below normal", ["above normal", "exactly normal", "zero"], "Rarefaction = low pressure."),
  Q("On a pressure-distance graph, a peak represents", "a compression", ["a rarefaction", "an air particle at rest", "the speaker"], "Peaks are above-normal pressure: compressions."),
  Q("The peaks of a pressure graph double in height with the same spacing. The sound is", "louder, with the same pitch", ["higher pitched, with the same loudness", "louder and higher pitched", "unchanged"], "Bigger amplitude = louder. Spacing (wavelength) = pitch."),
  Q("A sound wave travels to the right. The graph is shifted to show a quarter of a period later. The pattern moves", "right by one quarter of a wavelength", ["right by one quarter of a metre", "left by a quarter wavelength", "right by one wavelength"], "The pattern slides λ/4 in the direction of travel."),
  Q("The wavelength is 0.80 m. How far does a crest move in half a period?", "0.40 m", ["0.20 m", "0.80 m", "1.6 m"], "T/2 corresponds to λ/2 = 0.40 m."),
  Q("A shout echoes back from a cliff after 2.0 s. The distance to the cliff is about", "340 m", ["680 m", "170 m", "1360 m"], "$d=vt/2=340\\times2.0/2=340$ m."),
  Q("A candle flame in front of a 10 Hz loudspeaker flickers", "10 times a second, towards and away from the speaker", ["10 times a second, up and down", "once, then stays bent", "100 times a second"], "The flame is pushed by the pressure variations at the sound frequency, along the direction of travel."),
  Q("Sound spreads out and the amplitude of the pressure variation gets smaller far from the source. The pitch", "stays the same", ["gets lower", "gets higher", "disappears"], "Pitch depends on frequency, which is fixed by the source."),
  Q("Which graph feature gives the wavelength?", "The distance between neighbouring peaks on a pressure-distance graph", ["The time between peaks on a pressure-time graph", "The height of a peak", "The slope of the graph"], "Wavelength is a length, so read it from a distance axis.")
 ] });
GEN.w3 = [
 () => { const t = P([0.2, 0.4, 0.5, 1.0, 1.5]); return mk(`A clap echoes back from a wall after ${t} s. The wall is`, fx(170 * t, 0) + " m away", [fx(340 * t, 0) + " m away", fx(340 / t, 0) + " m away", fx(85 * t, 0) + " m away"], `$d=vt/2=340\\times${t}/2$.`); },
 () => { const l = P([0.4, 0.6, 0.8, 1.2, 2.0]), fr = P([[4, "T/4", 4], [2, "T/2", 2]]); return mk(`A sound wave of wavelength ${l} m travels right. After ${fr[1]}, a crest has moved`, fx(l / fr[2], 2) + " m to the right", [fx(l, 2) + " m to the right", fx(l / fr[2], 2) + " m to the left", fx(l * 2, 2) + " m to the right"], `After ${fr[1]} the pattern slides λ/${fr[2]} = ${fx(l / fr[2], 2)} m.`); }
];

// ---------------------------------------------------------------- w4
COURSE.push({ id: "w4", t: "Loudness 1: intensity and the inverse square law", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Power</b>: energy per second, in watts (1 W = 1 J/s). <b>Area</b>: how much surface, in m². <b>Intensity</b> ($I$): the sound power landing on each square metre, so $I=\text{power}\div\text{area}$, in <b>W/m²</b>. <b>Inversely proportional</b>: when one thing goes up, the other goes down by the same factor. <b>Factor</b>: a number you multiply or divide by.`,
   ["If the same power lands on twice the area, what happens to the intensity?", "It halves."]),
 T(1, String.raw`<b>What intensity means.</b> Shine a torch on a wall 1 m away: a bright small circle. Move back to 3 m: the same light spreads over a much bigger circle, so each patch of wall is dimmer. Sound does the same. A source gives out a fixed amount of energy per second, and as the sound travels away, that energy is spread over a bigger and bigger area, so the intensity (energy per second per square metre) drops. The ear copes with a huge range: from $10^{-12}$ W/m² (barely audible) up to about $1$ W/m² (painful).`,
   ["Why does a sound get quieter as you walk away from it?", "The same energy is spread over a larger area, so the intensity falls."]),
 T(2, String.raw`<b>The inverse square law.</b> Sound from a small source spreads out in all directions like an expanding balloon (a sphere). The area of a sphere is proportional to $r^2$. Double the distance: the area is $2^2=4$ times bigger, so the intensity is <b>$\frac14$</b>. Triple the distance: area $\times9$, intensity $\frac19$. $$I\propto\frac1{r^2}\qquad\frac{I_2}{I_1}=\left(\frac{r_1}{r_2}\right)^2$$ (This assumes the sound spreads equally in all directions in open space with no echoes.)`,
   ["Distance from a speaker is tripled. By what factor does the intensity change?", "It becomes $\\frac19$ of the original."],
   ["Saying double the distance halves the intensity. It quarters it (÷4).", "Forgetting to square the ratio."], "inverse_square"),
 T(2, String.raw`<b>Using it: the ratio method.</b> Work out the distance ratio, square it, and divide (if you go further away) or multiply (if you come closer).<br><b>Worked example.</b> At $0.10$ m from a singer the intensity is $1.0\times10^{-6}$ W/m². What is it at $2.0$ m? The distance ratio is $2.0\div0.10=20$, so the intensity falls by $20^2=400$: $$I=\frac{1.0\times10^{-6}}{400}=2.5\times10^{-9}\ \text{W/m}^2.$$ <b>Coming closer:</b> at half the distance the intensity is $2^2=4$ times bigger.`,
   ["I = 8.0×10⁻⁶ W/m² at 1 m. Find I at 4 m.", "Ratio 4, so ÷16: $5.0\\times10^{-7}$ W/m²."],
   ["Dividing by 20 instead of 400. Square the ratio first."]),
 T(2, String.raw`<b>Explain-question model answer.</b> <i>'Why does the amplitude of the pressure variation get smaller as you move away from the speaker, but the pitch stays the same?'</i><br>The sound spreads out as an expanding sphere, so the same energy is spread over a larger area (area $\propto r^2$) and the intensity decreases, which means the amplitude of the pressure variation decreases. The frequency (and wavelength) are set by the source and do not change, so the pitch stays the same.`),
 T(2, String.raw`<b>Worked examples.</b><br>(1) Points X and Y: Y is twice as far from the speakers as X. If the intensity at X is $I_0$, at Y it is $\frac{I_0}4$.<br>(2) How far must you go for the intensity to fall to $\frac1{25}$? The distance factor is $\sqrt{25}=5$.<br>(3) A student at 10 m moves to 20 m. The distance is doubled so the intensity is $\frac14$ of what it was.`,
   ["Intensity drops to 1/100 of its value. By what factor has the distance increased?", "$\\sqrt{100}=10$ times."]),
 T(3, String.raw`<b>Stretch: where does 1/r² come from?</b> If the source has power $P$, at distance $r$ that power is spread over a sphere of area $4\pi r^2$, so $$I=\frac{P}{4\pi r^2}.$$ (You are not required to use acoustic power in the exam, but this shows why the law is 'inverse square'.) For example a $2.0$ W source at $5.0$ m: $I=\frac{2.0}{4\pi\times25}=6.4\times10^{-3}$ W/m².`,
   ["A 10 W source: what is I at 2.0 m? (4π×4 ≈ 50.3)", "$10\\div50.3\\approx0.20$ W/m²."])
 ],
 base: [
  Q("Sound intensity is measured in", "W/m²", ["Hz", "dB only", "m/s"], "Power per unit area: watts per square metre."),
  Q("The distance from a point source is doubled. The intensity becomes", "one quarter", ["one half", "double", "one eighth"], "Inverse square: $(1/2)^2=1/4$."),
  Q("The distance from a point source is tripled. The intensity becomes", "one ninth", ["one third", "one sixth", "one twenty-seventh"], "$(1/3)^2=1/9$."),
  Q("You walk to half your original distance from a speaker. The intensity becomes", "4 times bigger", ["2 times bigger", "half", "4 times smaller"], "Distance ÷2 so intensity ×4."),
  Q("At 1.0 m the intensity is 4.0×10⁻⁶ W/m². At 4.0 m it is", "2.5×10⁻⁷ W/m²", ["1.0×10⁻⁶ W/m²", "1.6×10⁻⁵ W/m²", "5.0×10⁻⁷ W/m²"], "Ratio 4, so ÷16: 4.0×10⁻⁶ ÷ 16 = 2.5×10⁻⁷."),
  Q("The intensity at X is I₀. Point Y is twice as far from the source. The intensity at Y is closest to", "I₀/4", ["I₀/2", "I₀", "2I₀"], "Double distance = ÷4."),
  Q("Why does a sound get quieter with distance, but not change pitch?", "The energy spreads over a larger area, but the frequency is set by the source", ["The frequency decreases with distance", "The air absorbs all the high notes", "The speed of sound decreases"], "Intensity falls because of spreading. Frequency stays fixed."),
  Q("Which assumption does the inverse square law need?", "The sound spreads equally in all directions with no reflections", ["The sound is a transverse wave", "The source is very loud", "The listener moves at the speed of sound"], "In a room with echoes the law is only approximate."),
  Q("Intensity falls to 1/16 of its original value. The distance has", "increased by a factor of 4", ["increased by a factor of 16", "increased by a factor of 8", "increased by a factor of 2"], "$\\sqrt{16}=4$."),
  Q("The intensity at the threshold of hearing is about", "10⁻¹² W/m²", ["1 W/m²", "10⁻⁶ W/m²", "10² W/m²"], "That is the reference intensity I₀.")
 ] });
GEN.w4 = [
 () => { const k = P([2, 3, 4, 5, 10]), I = P([1.0, 2.0, 3.6, 5.0, 8.0]) * Math.pow(10, -R(5, 7)); return mk(`At 1.0 m a speaker gives intensity ${sci(I)} W/m². At ${k}.0 m the intensity is`, sci(I / (k * k)) + " W/m²", [sci(I / k) + " W/m²", sci(I * k * k) + " W/m²", sci(I / (2 * k)) + " W/m²"], `Distance ×${k} so intensity ÷${k * k}.`); },
 () => { const k = P([2, 3, 5, 10]); return mk(`The intensity from a point source falls to 1/${k * k} of its value. The distance has increased by a factor of`, String(k), [String(k * k), String(k * 2), fx(1 / k, 2)], `$\\sqrt{${k * k}}=${k}$.`); }
];
