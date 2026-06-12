# Multimodal Auditory Learning for Embodied Intelligence

<p align="center">
  <img src="assets/icon.svg" width="220" alt="Multimodal auditory embodied intelligence icon">
</p>

<p align="center">
  <b>A survey website for organizing auditory learning in embodied intelligence through a three-loop, three-stage taxonomy.</b>
</p>

## Overview

This repository hosts the project page for the survey **Multimodal Auditory Learning for Embodied Intelligence**. The page summarizes how auditory signals support embodied agents beyond conventional speech recognition or audio classification, with emphasis on closed-loop sensing, reasoning, and interaction.

The survey is organized around three complementary loops:

- **Physical loop:** auditory perception for acoustic sensing, state estimation, simulation, navigation, and manipulation.
- **Symbolic loop:** speech and language understanding, grounded planning, memory, dialogue, and language-action output.
- **Social loop:** affective sensing, user-state reasoning, relationship modeling, and expressive multimodal response.

Each loop is further divided into **Listen**, **Reason**, and **Interact** stages, producing a compact nine-part structure for comparing papers, benchmarks, metrics, and research directions.

## Nine-Part Taxonomy

| Loop | Listen | Reason | Interact |
| --- | --- | --- | --- |
| **Physical** | Acoustic sensing, source localization, speech enhancement, active audition | Audio-visual navigation, acoustic mapping, acoustic simulation, scene understanding | Audio-guided manipulation, contact-rich manipulation, spatial audio generation, sonic feedback |
| **Symbolic** | ASR, spoken instruction parsing, prosody-aware intent recognition, multi-turn dialogue understanding | VLA planning, language grounding, action grounding, long-term memory | Dialogue management, action-justified language generation, online correction, full-duplex verbal feedback |
| **Social** | Speech emotion recognition, paralinguistic analysis, speaker recognition, multimodal affect recognition | User-state estimation, trust and relationship modeling, engagement modeling, social norm modeling | Affective response generation, expressive speech synthesis, co-speech gesture generation, facial expression generation |

## Page Contents

The GitHub Page includes:

- A custom robot-audio icon and visual landing section.
- A concise 3 x 3 taxonomy summary.
- Professional research directions within each of the nine sections.
- Survey figures for motivation, taxonomy, and research-direction organization.
- A static frontend that can be deployed directly with GitHub Pages.

## Repository Structure

```text
.
+-- index.html
+-- styles.css
+-- script.js
+-- assets/
|   +-- icon.svg
+-- figures/
    +-- motivation_overview.png
    +-- taxonomy_loop.png
    +-- research_direction_taxonomy.png
```

## Local Preview

The page is fully static. You can open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Deployment

1. Push the files in this folder to a GitHub repository.
2. Open the repository settings.
3. Go to **Pages**.
4. Set the source to the repository root, or move these files into `docs/` and select that folder.
5. Save the setting and open the generated GitHub Pages URL.

## Citation

If you use this taxonomy or website structure, please cite the survey:

```bibtex
@article{multimodalAuditoryEmbodiedSurvey,
  title   = {Multimodal Auditory Learning for Embodied Intelligence: A Survey},
  author  = {Anonymous Authors},
  journal = {Survey Manuscript},
  year    = {2026}
}
```

## License

This project page is intended for academic communication and survey organization. Please update the license according to the final release policy of the paper and repository.
