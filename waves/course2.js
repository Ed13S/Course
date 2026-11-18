// ---------------------------------------------------------------- w5
COURSE.push({ id: "w5", t: "Loudness 2: decibels and the hearing curve", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Logarithm</b> ($\log$): 'how many zeros?' $\log(10)=1$, $\log(100)=2$, $\log(1000)=3$, $\log(10^n)=n$, and $\log(1)=0$. Also $\log(2)\approx0.30$. <b>Decibel</b> (dB): a unit for <i>sound level</i> that uses a log scale. <b>$I_0$</b>: the reference intensity, $10^{-12}$ W/m², the quietest sound a person can hear (the threshold of hearing). <b>Sound intensity level</b> ($L$): the loudness on the dB scale.`,
   ["What is log(10 000)?", "4 (there are four zeros)."]),
 T(1, String.raw`<b>Why use decibels?</b> Intensities from the quietest to the loudest sound span a range of a trillion ($10^{12}$) times. Our ears also hear <i>ratios</i>: if you add the same sound to a whisper you notice it, but adding it to a jet engine you would never notice. A log scale squashes the huge range into small friendly numbers: 0 dB (barely audible) up to about 120 dB (painful).`,
   ["Is a jackhammer (100 dB) ten times, or about a hundred billion times, more intense than the threshold of hearing?", "$10^{10}$ times: every 10 dB is a factor 10, and 100 dB is ten of those steps."]),
 T(2, String.raw`<b>The formula.</b> $$L=10\log_{10}\!\left(\frac{I}{I_0}\right)\ \text{dB},\qquad I_0=10^{-12}\ \text{W/m}^2$$ Example: $I=10^{-6}$ W/m². $\frac{I}{I_0}=10^{6}$, $\log=6$, so $L=60$ dB. If $I=I_0$ then $L=0$ dB. To go backwards: $I=I_0\times10^{L/10}$; for 50 dB, $I=10^{-12}\times10^5=10^{-7}$ W/m².`,
   ["Find L if I = 10⁻⁹ W/m².", "$I/I_0=10^3$, $\\log=3$, $L=30$ dB."],
   ["Forgetting to divide by I₀ first.", "Forgetting the 10 in front (that gives bels, not decibels)."]),
 T(2, String.raw`<b>Changes in level: the shortcuts.</b> $\Delta L=10\log\left(\frac{I_2}{I_1}\right)$. In practice remember:<br>• intensity $\times10$ → $+10$ dB<br>• intensity $\times100$ → $+20$ dB; $\times1000$ → $+30$ dB (count the zeros, times 10)<br>• intensity $\times2$ → $+3$ dB; intensity $\div2$ → $-3$ dB<br>• intensity $\div10$ → $-10$ dB<br>Powers of two combine: $\times8=2\times2\times2$ is $+9$ dB. <b>10 dB</b> is heard as roughly twice as loud.`,
   ["Intensity is multiplied by 1000. By how many dB does the level rise?", "$+30$ dB."],
   ["Adding the intensity ratio to the dB value. Ratios become multiplications, dB changes are additions.", "Thinking doubling the intensity doubles the dB (it is only +3 dB)."], "decibel"),
 T(2, String.raw`<b>Distance and decibels together.</b> Doubling the distance makes $I\to\frac I4$, which is $-6$ dB. Tripling the distance: $\frac I9$, about $-9.5$ dB. Ten times the distance: $\frac I{100}$, $-20$ dB.<br><b>Worked example.</b> A student stands $10$ m from a speaker and measures $L_0$ dB. At $20$ m the intensity is $\frac14$, so the level is $L_0-6$ dB. If $L_0=60$ dB then at double the distance of X it is $60-6=54$ dB.`,
   ["A speaker reads 80 dB at 5 m. What does it read at 10 m?", "$80-6=74$ dB."],
   ["Using −3 dB for doubling the distance. −3 dB is for halving the intensity; doubling the distance quarters it (−6 dB)."]),
 T(2, String.raw`<b>Worked examples (VCE style).</b><br>(1) The intensity increases by a factor of 1000: $\Delta L=10\log1000=30$ dB.<br>(2) The level at X drops from 60 dB to 51 dB, so $\Delta L=-9$ dB. 9 dB is three lots of 3 dB, so the intensity halved three times: $\frac12\times\frac12\times\frac12=\frac18$. The ratio of before to after is $8:1$. (Not $60:51$! dB values are logs, so you cannot divide them.)<br>(3) At 20 000 Hz the intensity threshold is $10^5$ times bigger than at 1000 Hz ($10^{-12}$ vs $10^{-7}$): $\Delta L=10\log10^5=50$ dB.`,
   ["Level falls by 20 dB. What is the intensity ratio before:after?", "$100:1$."],
   ["Dividing dB values to get a ratio."]),
 T(2, String.raw`<b>The ear is not equally sensitive to every pitch.</b> The 'threshold of hearing' graph shows the <i>quietest</i> sound you can hear at each frequency (a LOW point on the graph = very sensitive hearing). Our ears are most sensitive at about 3000-4000 Hz (the ear canal resonates there, see the pipes lessons) and very insensitive at very low and very high frequencies.<br><b>How to read it:</b> a sound of level $X$ dB can be heard at any frequency where the curve is <i>below</i> $X$. Draw a horizontal line at $X$; the audible range runs between where it meets the curve on each side. The <i>vertical</i> gap between two points on the curve is a change in dB; the <i>ratio</i> of intensities is $10^{\Delta L/10}$.`,
   ["A sound at 20 dB sits just below the curve at 50 Hz. Can you hear it?", "No: the curve is above 20 dB there, so the sound is too quiet to hear."],
   null, "hearing"),
 T(2, String.raw`<b>Staying safe with loud sound.</b> Long or repeated exposure above about 85 dB can damage hearing permanently, and every extra 3 dB (a doubling of intensity) roughly halves the safe time. Safe practice: keep the volume as low as practical, move further away from the source (every doubling of distance gives -6 dB), limit the time, wear ear protection (ear muffs lower the level by a known number of dB), take breaks, and never test equipment at full volume.`,
   ["Ear muffs reduce the level by 16 dB. A sound is 90 dB outside. What do you hear?", "$90-16=74$ dB."]),
 T(3, String.raw`<b>Stretch: combining sources.</b> Two identical 60 dB sources together make double the intensity, so only $60+3=63$ dB, not 120 dB. Ten identical sources are $\times10$, so $+10$ dB. Decibel levels are logs and cannot be added directly; add the <i>intensities</i> and convert back.<br>Check with numbers: $60$ dB $=10^{-6}$ W/m². Two sources: $2\times10^{-6}$. $L=10\log\frac{2\times10^{-6}}{10^{-12}}=10\log(2\times10^{6})=10(6.30)=63$ dB. ✓`,
   ["Four identical 70 dB sources together make about", "$\\times4$ is $+6$ dB: 76 dB."])
 ],
 base: [
  Q("The reference intensity I₀ (0 dB) is", "10⁻¹² W/m²", ["1 W/m²", "10⁻⁶ W/m²", "0 W/m²"], "I₀ is the quietest audible sound, 10⁻¹² W/m²."),
  Q("A sound has intensity 10⁻⁶ W/m². Its level is", "60 dB", ["6 dB", "−6 dB", "600 dB"], "$10\\log(10^{-6}/10^{-12})=10\\log10^{6}=60$."),
  Q("The intensity of a sound is multiplied by 100. The level rises by", "20 dB", ["100 dB", "2 dB", "10 dB"], "×10 is +10 dB, so ×100 is +20 dB."),
  Q("The intensity is doubled. The level increases by about", "3 dB", ["2 dB", "6 dB", "10 dB"], "$10\\log2\\approx3$."),
  Q("The distance from a point source is doubled. The level changes by about", "−6 dB", ["−3 dB", "−12 dB", "−10 dB"], "Intensity ÷4, which is −6 dB."),
  Q("A level falls from 60 dB to 51 dB. The ratio of intensity before to after is about", "8 : 1", ["60 : 51", "9 : 1", "3 : 1"], "−9 dB is three halvings: 2×2×2 = 8."),
  Q("A sound has level 20 dB. The intensity is", "10⁻¹⁰ W/m²", ["10⁻² W/m²", "20 W/m²", "10⁻¹⁴ W/m²"], "$I=10^{-12}\\times10^{20/10}=10^{-10}$."),
  Q("Two identical sources each make 70 dB at a listener. Together they make about", "73 dB", ["140 dB", "72 dB", "70 dB"], "Double the intensity is +3 dB."),
  Q("On a hearing-threshold graph, a LOW point of the curve means", "the ear is very sensitive at that frequency", ["the ear is deaf at that frequency", "the sound is very loud", "the wavelength is long"], "The curve is the quietest audible sound; low = quiet sounds can be heard."),
  Q("A hearing curve is at 25 dB at 100 Hz. A 100 Hz sound of level 20 dB would be", "inaudible", ["audible", "painful", "ultrasound"], "20 dB is below the 25 dB threshold, so you cannot hear it."),
  Q("Which action lowers the level at your ear by the largest amount?", "Moving 4 times further from the source", ["Doubling the distance", "Halving the source's intensity", "Covering one ear"], "×4 distance is ÷16 intensity, −12 dB. Doubling the distance is −6 dB, halving intensity −3 dB.")
 ] });
GEN.w5 = [
 () => { const k = R(3, 11); return mk(`A sound has intensity $10^{-${k}}$ W/m². Its sound level is`, (12 - k) * 10 + " dB", [k * 10 + " dB", (12 - k) + " dB", (12 + k) * 10 + " dB"], `$L=10\\log(10^{-${k}}/10^{-12})=10\\times${12 - k}$.`); },
 () => { const k = R(1, 5); return mk(`The intensity of a sound is multiplied by $10^{${k}}$. The level rises by`, k * 10 + " dB", [Math.pow(10, k) + " dB", k + " dB", k * 3 + " dB"], `Each factor of 10 is +10 dB: ${k}×10.`); },
 () => { const L = P([60, 70, 75, 80, 90]), k = P([[2, 6], [4, 12], [10, 20]]); return mk(`At 1 m from a speaker the level is ${L} dB. At ${k[0]} m it is about`, (L - k[1]) + " dB", [(L - k[0]) + " dB", (L - k[1] / 2) + " dB", (L + k[1]) + " dB"], `Distance ×${k[0]} makes intensity ÷${k[0] * k[0]}, which is −${k[1]} dB.`); }
];

// ---------------------------------------------------------------- w6
COURSE.push({ id: "w6", t: "Superposition and standing waves", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Superposition</b>: when two waves are in the same place, add their displacements. <b>Travelling wave</b>: a wave whose pattern moves along. <b>Standing wave</b>: a pattern that stays in place and just vibrates. <b>Node</b> (N): a point that never moves. <b>Antinode</b> (A): a point that moves the most. <b>Natural frequency</b>: a frequency an object likes to vibrate at.`,
   ["Which point of a standing wave never moves?", "A node."]),
 T(1, String.raw`<b>Superposition.</b> When two waves cross, at every point you just <b>add</b> what each wave would do alone. Crest + crest = a bigger crest. Crest + trough = they cancel. After they pass, each wave carries on unchanged, like two ripples passing through each other.`,
   ["A crest of height +2 meets a trough of depth −2. What is the sum at that point?", "Zero."]),
 T(2, String.raw`<b>Making a standing wave.</b> Shake a rope tied at the far end. The wave reflects and comes back upside down. Now two identical waves, same frequency and amplitude, travel in <b>opposite directions</b> in the same medium. Adding them gives a pattern that does not move along: points that are always cancelled (<b>nodes</b>) and loops that swing up and down (<b>antinodes</b>), with an amplitude <b>twice</b> that of each wave. Distances: node to next node $=\frac\lambda2$; node to the next antinode $=\frac\lambda4$.`,
   ["Two nodes are 0.50 m apart (neighbours). What is the wavelength?", "$\\lambda=2\\times0.50=1.0$ m."],
   ["Saying node-to-node is one wavelength. It is half a wavelength."], "standing_wave"),
 T(2, String.raw`<b>Standing vs travelling.</b><br>• <b>Travelling:</b> the pattern slides along, energy is carried along, every point reaches the same maximum.<br>• <b>Standing:</b> the pattern stays put, there is no net energy flow along it, amplitude varies from zero (node) to maximum (antinode).<br><b>How a standing wave moves in time:</b> after $T/4$ it is <i>flat</i> everywhere, after $T/2$ it is the mirror image (crests where troughs were), after $\frac{3T}{4}$ flat again. A travelling wave just slides; a standing wave just swings in place.`,
   ["A standing wave is at maximum displacement now. What does it look like T/4 later?", "Flat: all points are momentarily at rest position."]),
 T(2, String.raw`<b>Only certain frequencies work.</b> A standing wave only forms if the reflected wave lines up with the next outgoing wave so that they reinforce. If it doesn't line up, the waves cancel out and no big pattern appears. So a string or pipe has special <b>natural frequencies</b>. Forcing it at one of those is called <b>resonance</b> and gives a big response (see the resonance lesson).`),
 T(2, String.raw`<b>Standing waves with sound: two speakers.</b> Two speakers face each other, 40 m apart, driven by the same generator, emitting $\lambda=2.0$ m. A person walking between them hears <b>loud, quiet, loud, quiet</b>: loud at the antinodes, quiet at the nodes, which are spaced $\frac\lambda2=1.0$ m apart (so loud spots every 1.0 m, with quiet spots halfway between them, 0.5 m from each loud spot).`,
   ["λ = 0.80 m. How far is it from one quiet spot to the next?", "$0.40$ m."]),
 T(2, String.raw`<b>Worked examples.</b><br>(1) A rope shows 5 nodes in a row (counting both ends), neighbours 0.30 m apart. Length $=4\times0.30=1.2$ m, containing $4$ half-wavelengths, so $\lambda=0.60$ m. If $f=50$ Hz then $v=f\lambda=30$ m/s.<br>(2) Which graph is a standing wave $\frac T4$ later? The flat line. Which for $\frac T2$? The upside-down copy. (A travelling wave would be shifted sideways instead.)`),
 T(3, String.raw`<b>Stretch: why the amplitude doubles.</b> Add $y_1=A\sin(kx-\omega t)$ and $y_2=A\sin(kx+\omega t)$. The result is $2A\sin(kx)\cos(\omega t)$: a fixed spatial pattern $\sin(kx)$ (nodes where it is zero) multiplied by a time swing $\cos(\omega t)$. The biggest swing is $2A$ at the antinodes. This is the maths of resonance in guitars, organ pipes and microwave ovens.`)
 ],
 base: [
  Q("A standing wave is formed by", "two identical waves travelling in opposite directions", ["two waves travelling in the same direction", "one wave in a vacuum", "a wave of changing frequency"], "Opposite directions and the same frequency and amplitude."),
  Q("A node is a point where", "the medium never moves", ["the medium moves the most", "the wave is fastest", "the pressure is always normal for a pipe end only"], "Nodes are fixed zero points of displacement."),
  Q("The distance between adjacent nodes is", "half a wavelength", ["one wavelength", "a quarter of a wavelength", "two wavelengths"], "Node to node = λ/2."),
  Q("The distance from a node to the next antinode is", "a quarter of a wavelength", ["half a wavelength", "one wavelength", "three quarters of a wavelength"], "Node to antinode = λ/4."),
  Q("Adjacent nodes of a standing wave are 0.25 m apart. The wavelength is", "0.50 m", ["0.25 m", "0.125 m", "1.0 m"], "$\\lambda=2\\times0.25$."),
  Q("A standing wave is at its maximum displacement. A quarter of a period later it looks", "flat", ["the same", "upside down", "twice as high"], "All points pass through the rest position at T/4."),
  Q("A person walks between two facing speakers giving the same steady tone and hears", "alternating loud and quiet spots", ["steadily louder sound", "no sound", "only a high pitch"], "Antinodes (loud) alternate with nodes (quiet)."),
  Q("The amplitude at an antinode compared with each of the two waves is", "twice as large", ["the same", "half", "zero"], "Constructive addition gives double."),
  Q("A standing wave on a string with fixed ends only forms at certain frequencies because", "the reflected wave must line up with the incoming wave to reinforce", ["the string is too heavy for other frequencies", "sound is too slow", "the nodes move"], "Only natural frequencies fit the string length."),
  Q("A standing wave differs from a travelling wave because it", "does not carry energy along the medium", ["has a higher speed", "is always louder", "has no amplitude"], "The pattern stays in place; there is no net energy flow along it.")
 ] });
GEN.w6 = [
 () => { const d = P([0.1, 0.25, 0.30, 0.5, 0.85]); return mk(`Adjacent nodes of a standing wave are ${d} m apart. The wavelength is`, fx(2 * d, 2) + " m", [fx(d, 2) + " m", fx(d / 2, 3) + " m", fx(4 * d, 2) + " m"], `Node to node is λ/2, so λ = 2 × ${d}.`); },
 () => { const n = P([3, 4, 5, 6]), d = P([0.2, 0.3, 0.5]); return mk(`A rope shows ${n} nodes in a row (counting both ends) with neighbours ${d} m apart. The rope is`, fx((n - 1) * d, 2) + " m long", [fx(n * d, 2) + " m long", fx((n - 1) * d / 2, 3) + " m long", fx((n + 1) * d, 2) + " m long"], `${n - 1} gaps × ${d} m.`); }
];

// ---------------------------------------------------------------- w7
COURSE.push({ id: "w7", t: "Strings and harmonics", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Fixed end</b>: an end that cannot move, so it is always a node. <b>Fundamental</b> (1st harmonic): the lowest natural frequency, with one loop. <b>Harmonics</b>: the natural frequencies $f_1,2f_1,3f_1,\ldots$ <b>Overtone</b>: any harmonic above the fundamental. <b>Tension</b> ($T$): how hard the string is pulled, in newtons. <b>Mass per unit length</b> ($\mu$): how heavy the string is, in kg per metre.`,
   ["Is the 2nd harmonic the same as the 1st overtone?", "Yes."]),
 T(1, String.raw`<b>Standing waves on a string.</b> A guitar string is fixed at both ends, so both ends are nodes. The simplest pattern has one loop: the string length $L$ is half a wavelength. The next has two loops ($L=\lambda$), then three loops ($L=\frac{3\lambda}2$), and so on.`, null, null, "harmonics"),
 T(2, String.raw`<b>The pattern.</b> With $n$ loops: $$\lambda_n=\frac{2L}{n},\qquad f_n=\frac{v}{\lambda_n}=\frac{nv}{2L}=nf_1$$ Here $v$ is the speed of waves <i>on the string</i> (not 340 m/s). So the harmonics are $f_1$, $2f_1$, $3f_1$, ... in the ratio $1:2:3:4$. The 2nd harmonic is called the <b>1st overtone</b>, the 3rd harmonic the <b>2nd overtone</b>, and so on.`,
   ["A string's fundamental is 150 Hz. What is the third harmonic?", "$3\\times150=450$ Hz."],
   ["Overtone numbering: the 1st overtone is the 2nd harmonic. Off by one is the usual slip."]),
 T(2, String.raw`<b>What sets the pitch?</b> For a string, $$f_1=\frac1{2L}\sqrt{\frac{T}{\mu}}$$ so: <b>shorter</b> string = higher pitch ($f\propto\frac1L$); <b>tighter</b> string = higher pitch ($f\propto\sqrt T$); <b>thinner/lighter</b> string = higher pitch. Pressing a finger on a fret shortens the string. Halving the length doubles the frequency (one octave up). Quadrupling the tension doubles the frequency.`,
   ["A guitarist tightens a string so the tension is 4 times larger. What happens to f₁?", "It doubles ($\\sqrt4=2$)."],
   ["Using 340 m/s for the speed on a string. That is the speed of sound in air, not of waves on the string."]),
 T(2, String.raw`<b>Worked examples.</b><br>(1) A string of length $0.60$ m has wave speed $240$ m/s. $f_1=\frac{240}{2\times0.60}=200$ Hz; $f_2=400$ Hz; $f_3=600$ Hz.<br>(2) A finger shortens it to $0.40$ m (same $T$, $\mu$): $f\propto\frac1L$, so $f_1=200\times\frac{0.60}{0.40}=300$ Hz.<br>(3) $v=2Lf_1$: if $L=0.65$ m and $f_1=220$ Hz then $v=2(0.65)(220)=286$ m/s.`,
   ["A string with f₁ = 100 Hz is shortened to ¾ of its length. New f₁?", "$100\\div0.75=133$ Hz."]),
 T(2, String.raw`<b>Real notes are a mix.</b> A plucked string vibrates in many harmonics at once. The <i>fundamental</i> sets the pitch; the mixture of harmonics gives the sound its character (<b>timbre</b>), which is why a guitar and a violin sound different playing the same note. The wooden body resonates and makes the sound louder.`,
   ["Why do a flute and violin differ on the same note?", "They contain different mixes of harmonics (timbre)."]),
 T(3, String.raw`<b>Stretch: speed on a string.</b> Combining $v=f\lambda$ and $\lambda=\frac{2L}n$ gives $f_n=\frac n{2L}\sqrt{\frac T\mu}$, so the wave speed is $v=\sqrt{T/\mu}$. Check: $T=100$ N, $\mu=0.005$ kg/m: $v=\sqrt{20000}=141$ m/s. With $L=0.50$ m, $f_1=\frac{141}{2(0.50)}=141$ Hz. Ratio shortcut when $T$ and $\mu$ are constant: $f_2L_2=f_1L_1$.`,
   ["T = 400 N, μ = 0.01 kg/m. Find v.", "$\\sqrt{40000}=200$ m/s."])
 ],
 base: [
  Q("A string fixed at both ends has nodes at", "both ends", ["neither end", "one end only", "its centre only"], "Fixed ends cannot move: always nodes."),
  Q("For the fundamental of a string of length L, the wavelength is", "2L", ["L", "L/2", "4L"], "One loop = half a wavelength, so λ = 2L."),
  Q("A string's fundamental is 120 Hz. The 3rd harmonic is", "360 Hz", ["240 Hz", "480 Hz", "180 Hz"], "$3\\times120$."),
  Q("The 1st overtone is the same as the", "2nd harmonic", ["1st harmonic", "3rd harmonic", "fundamental"], "Overtones are harmonics above the fundamental."),
  Q("The length of a string is halved with the same tension. The fundamental frequency", "doubles", ["halves", "stays the same", "quadruples"], "$f\\propto1/L$."),
  Q("The tension of a string is multiplied by 9. The fundamental changes by a factor of", "3", ["9", "1/3", "81"], "$f\\propto\\sqrt T$ and $\\sqrt9=3$."),
  Q("A string has L = 0.50 m and wave speed 200 m/s. Its fundamental is", "200 Hz", ["100 Hz", "400 Hz", "800 Hz"], "$f_1=v/2L=200/(2\\times0.50)=200$ Hz."),
  Q("The speed of waves on a guitar string is about", "found from √(T/μ), not 340 m/s", ["always 340 m/s", "the speed of light", "zero"], "Speed on the string depends on its tension and mass per length."),
  Q("Which string vibrates with the highest pitch (all else equal)?", "A short, thin, tight string", ["A long, thick, loose string", "A long, thin, tight string", "A short, thick, loose string"], "Short, light and tight all raise the frequency."),
  Q("Two instruments play the same note but sound different. The reason is", "different mixes of harmonics", ["different fundamental frequencies", "different speeds of sound", "different wavelengths in air at the same frequency"], "The timbre depends on which harmonics are present and how strong.")
 ] });
GEN.w7 = [
 () => { const f = P([100, 120, 150, 220, 440]), n = R(2, 6); return mk(`A string has fundamental frequency ${f} Hz. Its harmonic number ${n} has frequency`, f * n + " Hz", [f * (n + 1) + " Hz", f * (n - 1) + " Hz", fx(f / n, 0) + " Hz"], `${n} × ${f}.`); },
 () => { const L = P([0.4, 0.5, 0.6, 0.8]), v = P([160, 200, 240, 300]); return mk(`A string of length ${L} m carries waves at ${v} m/s. Its fundamental frequency is`, fx(v / (2 * L), 0) + " Hz", [fx(v / L, 0) + " Hz", fx(v / (4 * L), 0) + " Hz", fx(2 * v * L, 0) + " Hz"], `$f_1=v/2L=${v}/${2 * L}$.`); },
 () => { const f = P([200, 300, 400]), k = P([2, 4]); return mk(`A string has f₁ = ${f} Hz. Its length is cut to 1/${k} of the original (same tension). The new f₁ is`, f * k + " Hz", [f / k + " Hz", f * k * k + " Hz", f + k + " Hz"], `$f\\propto1/L$, so ×${k}.`); }
];

// ---------------------------------------------------------------- w8
COURSE.push({ id: "w8", t: "Pipes: open and closed air columns", steps: [
 T(1, String.raw`<b>Words and ideas you need first.</b><br><b>Air column</b>: the air inside a tube. <b>Open end</b>: air can move freely, so the pressure stays at normal: a <b>pressure node</b>. <b>Closed end</b>: air cannot move, so pressure swings the most: a <b>pressure antinode</b>. <b>Odd harmonics</b>: 1st, 3rd, 5th, ... Blowing across a bottle or playing a flute, organ or clarinet makes the air in a tube vibrate as a standing wave.`,
   ["Is a closed end of a pipe a pressure node or antinode?", "Antinode."]),
 T(1, String.raw`<b>The two rules (memorise).</b> In the standing pressure wave: <b>open end = node (N)</b>, <b>closed end = antinode (A)</b>. Then draw the pattern and count how many quarter- or half-wavelengths fit in the tube. (Real pipes behave as if slightly longer than they are, but exam questions tell you to ignore this.)`,
   ["Draw a pipe closed at one end. What are the end labels of the simplest pattern?", "N at the open end, A at the closed end: a quarter of a wavelength."],
   ["Using the displacement picture (the opposite). In VCE exams the diagrams show pressure variation."], "pipes"),
 T(2, String.raw`<b>Pipe open at both ends.</b> N at both ends, just like a string: $$\lambda_n=\frac{2L}{n},\quad f_n=\frac{nv}{2L},\quad n=1,2,3,\ldots$$ All harmonics are possible. Example: $L=0.50$ m, $v=340$ m/s: $f_1=\frac{340}{2(0.50)}=340$ Hz, $f_2=680$ Hz, $f_3=1020$ Hz.`,
   ["An open pipe has f₁ = 170 Hz. What is the 4th harmonic?", "$4\\times170=680$ Hz."]),
 T(2, String.raw`<b>Pipe closed at one end.</b> N at the open end and A at the closed end. The shortest pattern is a <i>quarter</i> of a wavelength: $L=\frac\lambda4$ so $\lambda_1=4L$ and $$f_1=\frac v{4L}.$$ The next fit is $L=\frac{3\lambda}4$, then $\frac{5\lambda}4$: $f=3f_1,5f_1,\ldots$ Only <b>odd</b> harmonics exist. $$f_n=\frac{(2n-1)v}{4L}$$ The closed pipe's fundamental is half that of an open pipe of the same length: <b>an octave lower</b>.<br>Example: $L=0.50$ m, $v=340$ m/s: $f_1=170$ Hz, next $510$ Hz (not $340$ Hz!), then $850$ Hz.`,
   ["A closed pipe has f₁ = 100 Hz. What is the next resonance?", "$300$ Hz (3rd harmonic, not 200 Hz)."],
   ["Including the even harmonics for a closed pipe. Closed pipes only have odd ones: 1, 3, 5...", "Using $L=\\lambda/2$ for a closed pipe."]),
 T(2, String.raw`<b>The drawing method.</b> (1) Draw the tube. (2) Mark N or A at each end. (3) Sketch the standing wave. (4) Write L as a number of quarter/half-wavelengths. (5) Find $\lambda$, then use $v=f\lambda$.<br><b>Worked example (clarinet, closed at one end).</b> $f_1=130$ Hz, $v=340$ m/s: $L=\frac{v}{4f_1}=\frac{340}{4(130)}=0.65$ m. A note of $650$ Hz $=5\times130$ Hz is the <b>5th harmonic</b>: $L=\frac{5\lambda}{4}$, so the pattern has two and a half loops, with an antinode at the closed (mouthpiece) end and a node at the open end.`,
   ["A closed tube: f₁ = 85 Hz. What is L (v = 340)?", "$L=340/(4\\times85)=1.0$ m."]),
 T(2, String.raw`<b>Real instruments.</b> A trombone slide changes $L$ and so the note; flute holes shorten the effective tube. A dinosaur (Parasaurolophus) nasal horn modelled as an open pipe of $L=2.80$ m has $f_1=\frac{340}{2(2.80)}=61$ Hz (a deep rumble) and the next is $121$ Hz. A $2.0$ m open pipe: $f_1=\frac{340}{4.0}=85$ Hz, and the $1$st overtone is $170$ Hz. The longer the tube, the lower the note.`,
   ["Which is lower: a short or a long organ pipe?", "The long pipe (f ∝ 1/L)."]),
 T(3, String.raw`<b>Stretch: the ear canal.</b> Your outer ear canal is a tube closed at the eardrum, about $2.5$ cm long. $f_1=\frac{340}{4(0.025)}=3400$ Hz, which explains why hearing is most sensitive around 3000-4000 Hz. An elephant's longer canal gives a lower best frequency; a cat's shorter canal gives a higher one. <b>Another example:</b> a bottle (closed at the bottom) sounds a lower note the more air it contains; pour in water and the note rises because $L$ shrinks.`,
   ["A canal 5.0 cm long (closed one end). Best frequency?", "$340/(4\\times0.05)=1700$ Hz."])
 ],
 base: [
  Q("At the open end of a pipe, the pressure variation has a", "node", ["antinode", "crest only", "reflection"], "Air is free to move so pressure stays near normal: a pressure node."),
  Q("At the closed end of a pipe, the pressure variation has a", "antinode", ["node", "wavelength", "harmonic"], "The wall blocks the air, so pressure builds up and swings most."),
  Q("A pipe open at both ends has length L. The fundamental wavelength is", "2L", ["4L", "L", "L/2"], "N at both ends: L = λ/2."),
  Q("A pipe closed at one end has length L. The fundamental wavelength is", "4L", ["2L", "L", "L/4"], "N to A is λ/4, so λ = 4L."),
  Q("The harmonics in a pipe closed at one end are", "only the odd ones (1st, 3rd, 5th...)", ["all of them", "only the even ones", "none, it cannot resonate"], "Only odd multiples of f₁ fit N at one end and A at the other."),
  Q("A closed pipe has f₁ = 100 Hz. The next resonance is", "300 Hz", ["200 Hz", "400 Hz", "150 Hz"], "Next is the 3rd harmonic: 3 × 100."),
  Q("An open pipe and a closed pipe have the same length. The fundamental of the closed pipe is", "half that of the open pipe", ["double", "the same", "a quarter"], "$f=v/4L$ vs $v/2L$."),
  Q("An open pipe is 0.50 m long (v = 340 m/s). Its fundamental is", "340 Hz", ["170 Hz", "680 Hz", "85 Hz"], "$f_1=v/2L=340/1.0=340$ Hz."),
  Q("A tube closed at one end has f₁ = 130 Hz. A 650 Hz note is the", "5th harmonic", ["4th harmonic", "2nd harmonic", "10th harmonic"], "650/130 = 5."),
  Q("A flute player covers more holes, making the air column longer. The note", "gets lower", ["gets higher", "stays the same", "gets louder only"], "$f\\propto1/L$.")
 ] });
GEN.w8 = [
 () => { const L = P([0.25, 0.5, 0.85, 1.0, 1.7]); return mk(`A pipe open at both ends is ${L} m long (v = 340 m/s). Its fundamental frequency is`, fx(340 / (2 * L), 0) + " Hz", [fx(340 / (4 * L), 0) + " Hz", fx(340 / L, 0) + " Hz", fx(340 * L, 0) + " Hz"], `$f_1=v/2L=340/${2 * L}$.`); },
 () => { const L = P([0.25, 0.5, 0.85, 1.0, 1.7]); return mk(`A pipe closed at one end is ${L} m long (v = 340 m/s). Its fundamental frequency is`, fx(340 / (4 * L), 0) + " Hz", [fx(340 / (2 * L), 0) + " Hz", fx(340 / L, 0) + " Hz", fx(340 / (8 * L), 0) + " Hz"], `$f_1=v/4L=340/${4 * L}$.`); },
 () => { const f = P([85, 100, 130, 170]), n = P([3, 5]); return mk(`A pipe closed at one end has fundamental ${f} Hz. Which is the next resonant frequency above it?`, 3 * f + " Hz", [2 * f + " Hz", 4 * f + " Hz", 1.5 * f + " Hz"], `Only odd harmonics: the next is 3 × ${f}.`); }
];
