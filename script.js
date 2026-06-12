const sections = [
  {
    stage: "P1 Listen",
    loop: "Physical",
    title: "Acoustic Sensing",
    summary:
      "Turns raw environmental sound, speech, source direction, and robot ego-noise into reliable auditory observations.",
    tasks: [
      ["Sound Source Localization", 23],
      ["Speech Enhancement", 16],
      ["Microphone Array Processing", 17],
      ["Active Audition", 15],
      ["Speech Separation", 13],
    ],
  },
  {
    stage: "P2 Reason",
    loop: "Physical",
    title: "State Estimation",
    summary:
      "Uses auditory and audio-visual evidence to infer navigation state, acoustic maps, scene structure, and physical events.",
    tasks: [
      ["Audio-Visual Navigation", 29],
      ["Audio-Visual Scene Understanding", 19],
      ["Acoustic Simulation", 13],
      ["Acoustic Mapping", 13],
    ],
  },
  {
    stage: "P3 Interact",
    loop: "Physical",
    title: "Control Feedback",
    summary:
      "Closes the physical loop through audio-guided manipulation, contact feedback, spatial sound, and sonified robot intent.",
    tasks: [
      ["Audio-Guided Manipulation", 16],
      ["Contact-Based Manipulation", 16],
      ["Spatial Audio Generation", 10],
      ["Sonic Feedback Interfaces", 16],
    ],
  },
  {
    stage: "Sy1 Listen",
    loop: "Symbolic",
    title: "Instruction Understanding",
    summary:
      "Maps speech, commands, prosody, referents, and multi-turn context into task-level language representations.",
    tasks: [
      ["Automatic Speech Recognition", 13],
      ["Prosody-Aware Intent Recognition", 14],
      ["Multi-Turn Dialogue", 13],
      ["Spoken Instruction Parsing", 15],
    ],
  },
  {
    stage: "Sy2 Reason",
    loop: "Symbolic",
    title: "Grounding and Planning",
    summary:
      "Connects language to objects, affordances, memory, plans, and VLA-style robot policies.",
    tasks: [
      ["VLA Planning", 65],
      ["Long-Term Memory", 13],
      ["Language Grounding", 13],
      ["Action Grounding", 21],
    ],
  },
  {
    stage: "Sy3 Interact",
    loop: "Symbolic",
    title: "Language-Action Output",
    summary:
      "Produces spoken dialogue, confirmations, corrections, explanations, and real-time verbal feedback during execution.",
    tasks: [
      ["Spoken Dialogue Management", 13],
      ["Action-Justified Language Generation", 12],
      ["Online Instruction Correction", 13],
      ["Full-Duplex Verbal Feedback", 13],
    ],
  },
  {
    stage: "So1 Listen",
    loop: "Social",
    title: "Affect Sensing",
    summary:
      "Reads emotion, paralinguistic cues, speaker identity, and multimodal affective signals from human partners.",
    tasks: [
      ["Speech Emotion Recognition", 16],
      ["Paralinguistic Analysis", 12],
      ["Speaker Recognition", 12],
      ["Multimodal Affect Recognition", 14],
    ],
  },
  {
    stage: "So2 Reason",
    loop: "Social",
    title: "Social Cognition",
    summary:
      "Models user state, trust, relationship dynamics, norms, culture, engagement, and socially appropriate policy constraints.",
    tasks: [
      ["User State Estimation", 12],
      ["Trust and Relationship Modeling", 14],
      ["Social Norm Modeling", 18],
      ["Engagement Modeling", 14],
    ],
  },
  {
    stage: "So3 Interact",
    loop: "Social",
    title: "Expressive Output",
    summary:
      "Generates affective responses, speech style, co-speech gestures, facial expressions, and multimodal social behavior.",
    tasks: [
      ["Affective Response Generation", 12],
      ["Co-Speech Gesture Generation", 13],
      ["Expressive Speech Synthesis", 10],
      ["Facial Expression Generation", 14],
    ],
  },
];

const domains = [
  ["P1 Listen", "Physical", [["Robot Audition", 54], ["Sound Source Localization and Tracking", 30], ["Microphone Array Signal Processing", 17], ["Speech Enhancement", 35], ["Speech Separation", 8], ["Drone Audition", 7]]],
  ["P2 Reason", "Physical", [["Audio-Visual Navigation", 56], ["Audio-Visual Scene Understanding", 25], ["Acoustic Simulation", 42], ["Acoustic Mapping", 29]]],
  ["P3 Interact", "Physical", [["Audio-Guided Robotic Manipulation", 28], ["Contact-Rich Robotic Manipulation", 33], ["Audio-Tactile Learning", 11], ["Auditory Display and Sonification for HRI", 13], ["Spatial Audio Generation", 6]]],
  ["Sy1 Listen", "Symbolic", [["Automatic Speech Recognition for HRI", 23], ["Spoken Language Understanding", 44], ["Reference Resolution and Disambiguation", 21], ["Prosody and Paralinguistics", 21], ["Multi-Turn and Multi-Party Dialogue Understanding", 31]]],
  ["Sy2 Reason", "Symbolic", [["Vision-Language-Action Models", 98], ["LLM-Based Robot Planning", 118], ["Language Grounding", 21], ["3D Scene Graphs and Open-Vocabulary Grounding", 12], ["Affordance Learning and Skill Grounding", 92], ["Long-Term Memory for Robots", 32]]],
  ["Sy3 Interact", "Symbolic", [["Spoken Dialogue Systems for Robots", 48], ["Incremental and Full-Duplex Dialogue", 35], ["Clarification and Dialogue Repair", 6], ["Natural Language Feedback for Robot Learning", 12], ["Explainable Robotics", 21]]],
  ["So1 Listen", "Social", [["Speech Emotion Recognition", 30], ["Computational Paralinguistics", 10], ["Speaker Recognition and Voice Biometrics", 13], ["Multimodal Emotion Recognition", 29]]],
  ["So2 Reason", "Social", [["Trust in Human-Robot Interaction", 57], ["Human-Robot Relationship Modeling", 55], ["User State Estimation", 16], ["Engagement Estimation", 29], ["Norm-Aware and Culturally Aware HRI", 44]]],
  ["So3 Interact", "Social", [["Expressive Speech Synthesis", 9], ["Co-Speech Gesture Generation", 18], ["Robot Facial Expression Generation", 18], ["Affective Dialogue Systems", 13], ["Multimodal Expressive Behavior Generation", 22]]],
];

function loopClass(loop) {
  return loop.toLowerCase();
}

function renderSections() {
  const grid = document.getElementById("sectionGrid");
  grid.innerHTML = sections
    .map(
      (section) => `
        <article class="section-card ${loopClass(section.loop)}">
          <h3>${section.stage}: ${section.title}</h3>
          <div class="stage-label">${section.loop} loop</div>
          <p>${section.summary}</p>
          <ul class="task-list">
            ${section.tasks
              .map((task) => `<li><span>${task[0]}</span><strong class="count">${task[1]} papers</strong></li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderDomains() {
  const table = document.getElementById("domainTable");
  table.innerHTML = domains
    .map(
      ([stage, loop, items]) => `
        <div class="domain-row">
          <div class="domain-stage ${loopClass(loop)}">${stage}</div>
          <div class="domain-items">
            ${items.map(([name, count]) => `<span class="pill">${name} <b>${count}</b></span>`).join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

renderSections();
renderDomains();
