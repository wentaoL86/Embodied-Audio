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

## Main Paper Classification

The tables below list representative papers from the current nine-part taxonomy. `GitHub` and `Stars` are reported only when repository metadata is available in the collected table; otherwise they are left as `-`.

### Physical Listen (P1 Listen)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Lend me an Ear: Speech Enhancement Using a Robotic Arm with a Microphone Array](http://arxiv.org/abs/2602.17818v1) | 2026 | Speech Enhancement | arXiv | - | - |
| [Single-Microphone-Based Sound Source Localization for Mobile Robots in Reverberant Environments](https://doi.org/10.1109/iros60139.2025.11246992) | 2025 | Sound Source Localization | DOI | - | - |
| [Swarm Active Audition with Robots and Drones: Real-World Performance Validation](https://doi.org/10.1109/iros60139.2025.11247372) | 2025 | Active Audition | DOI | - | - |
| [UaVirBASE: A Public-Access Unmanned Aerial Vehicle Sound Source Localization Dataset](https://doi.org/10.3390/app15105378) | 2025 | Sound Source Localization | DOI | - | - |
| [Drone-Based Sound Source Localization: A Systematic Literature Review](https://openalex.org/W7161211594) | 2025 | Sound Source Localization | Paper | - | - |
| [Real-Time Object Tracking with On-Device Deep Learning for Adaptive Beamforming in Dynamic Acoustic Environments](http://arxiv.org/abs/2511.19396v1) | 2025 | Sound Source Localization | arXiv | - | - |

### Physical Reason (P2 Reason)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Spatial-Aware Conditioned Fusion for Audio-Visual Navigation](http://arxiv.org/abs/2604.02390) | 2026 | Audio-Visual Navigation | arXiv | - | - |
| [Semantic Audio-Visual Navigation in Continuous Environments](http://arxiv.org/abs/2603.19660) | 2026 | Audio-Visual Scene Understanding | arXiv | - | - |
| [NaVLA$^2$: A Vision-Language-Audio-Action Model for Multimodal Instruction Navigation](https://doi.org/10.1609/aaai.v40i22.38886) | 2026 | Audio-Visual Navigation | DOI | - | - |
| [DSSNav: dual-stream slot-based fusion via Soft Actor-Critic for audio-visual navigation](https://doi.org/10.1007/s00530-026-02363-1) | 2026 | Audio-Visual Navigation | DOI | - | - |
| [Uncertainty-Aware Gaussian Map for Vision-Language Navigation](https://arxiv.org/abs/2605.26503) | 2026 | Audio-Visual Navigation | arXiv | - | - |
| [Generalizable Audio-Visual Navigation via Binaural Difference Attention and Action Transition Prediction](http://arxiv.org/abs/2604.05007v1) | 2026 | Audio-Visual Navigation | arXiv | - | - |

### Physical Interact (P3 Interact)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Decentralized LLM-Driven Coordination of Acoustic Robots for Contactless Object Manipulation](https://arxiv.org/abs/2605.29378) | 2026 | Audio-Guided Manipulation | arXiv | - | - |
| [Decoupled Spatial Audio for Room-Integrated Robots: An Augmentation Approach to Navigational Intent Communication](https://doi.org/10.1145/3795011.3795012) | 2026 | Sonic Feedback Interfaces | DOI | - | - |
| [The Role of Consequential and Functional Sound in Human-Robot Interaction: Toward Audio Augmented Reality Interfaces](http://arxiv.org/abs/2511.15956v3) | 2025 | Sonic Feedback Interfaces | arXiv | - | - |
| [A Multi-Modal Interaction Framework for Efficient Human-Robot Collaborative Shelf Picking](http://arxiv.org/abs/2504.06593v1) | 2025 | Audio-Guided Manipulation | arXiv | - | - |
| [MultiClear: Multimodal Soft Exoskeleton Glove for Transparent Object Grasping Assistance](http://arxiv.org/abs/2504.03379v1) | 2025 | Contact-Based Manipulation | arXiv | - | - |
| [Audio-VLA: Adding Contact Audio Perception to Vision-Language-Action Model for Robotic Manipulation](http://arxiv.org/abs/2511.09958v1) | 2025 | Audio-Guided Manipulation | arXiv | - | - |

### Symbolic Listen (Sy1 Listen)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Enhancing Speech Instruction Understanding and Disambiguation in Robotics via Speech Prosody](http://arxiv.org/abs/2506.02057v1) | 2025 | Prosody-Aware Intent Recognition | arXiv | - | - |
| [VLAS: Vision-Language-Action Model With Speech Instructions For Customized Robot Manipulation](http://arxiv.org/abs/2502.13508v2) | 2025 | Spoken Instruction Parsing | arXiv | - | - |
| [Talking to Robots: A Practical Examination of Speech Foundation Models for HRI Applications](https://arxiv.org/abs/2508.17753) | 2025 | Automatic Speech Recognition | arXiv | - | - |
| [Applying Automatic Speech Recognition on Intelligent Human-Robot Interfaces for Operational Usage](https://doi.org/10.37394/23205.2025.24.3) | 2025 | Automatic Speech Recognition | DOI | - | - |
| [From robots to chatbots: unveiling the dynamics of human-AI interaction](https://doi.org/10.3389/fpsyg.2025.1569277) | 2025 | Prosody-Aware Intent Recognition | DOI | - | - |
| [Constrained Robotic Navigation on Preferred Terrains Using LLMs and Speech Instruction: Exploiting the Power of Adverbs](http://arxiv.org/abs/2404.02294v1) | 2024 | Spoken Instruction Parsing | arXiv | - | - |

### Symbolic Reason (Sy2 Reason)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [VisualThink-VLA: Visual Intermediate Reasoning for Effective and Low-Latency Vision-Language-Action Policies](https://arxiv.org/abs/2605.30011) | 2026 | VLA Planning | arXiv | - | - |
| [VLAConf: Calibrated Task-Success Confidence for Vision-Language-Action Models](https://arxiv.org/abs/2605.29605) | 2026 | VLA Planning | arXiv | - | - |
| [PrimitiveVLA: Learning Reusable Motion Primitives for Efficient and Generalizable Robotic Manipulation](https://arxiv.org/abs/2605.28634) | 2026 | Action Grounding | arXiv | - | - |
| [Embodied3DBench: Benchmarking Low-Level Embodied Spatial Intelligence of Vision Language Models](https://arxiv.org/abs/2605.29074) | 2026 | Action Grounding | arXiv | - | - |
| [Uni-LaViRA: Language-Vision-Robot Actions Translation for Unified Embodied Navigation](https://arxiv.org/abs/2605.27582) | 2026 | Action Grounding | arXiv | - | - |
| [Multimodal Reasoning for Intent-Aware Human-Robot Collaborative Disassembly](https://vbn.aau.dk/da/publications/795ce794-1734-4ec0-b7fa-d2d9a75a216d) | 2026 | Action Grounding | Paper | - | - |

### Symbolic Interact (Sy3 Interact)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Dialogue based Interactive Explanations for Safety Decisions in Human Robot Collaboration](http://arxiv.org/abs/2604.05896v2) | 2026 | Action-Justified Language Generation | arXiv | - | - |
| [Diagnosing Live Within-Policy Instruction Conflicts in LLM Agents with Witnessed Resolution Profiles](https://arxiv.org/abs/2605.27784) | 2026 | Online Instruction Correction | arXiv | - | - |
| [The Silent Thought: Modeling Internal Cognition in Full-Duplex Spoken Dialogue Models via Latent Reasoning](https://arxiv.org/abs/2603.17837) | 2026 | Full-Duplex Verbal Feedback | arXiv | - | - |
| [Synchronization and Turn-Taking in Full-Duplex Speech Dialogue Models](https://arxiv.org/abs/2605.20356) | 2026 | Full-Duplex Verbal Feedback | arXiv | - | - |
| [Take That for Me: Multimodal Exophora Resolution with Interactive Questioning for Ambiguous Out-of-View Instructions](http://arxiv.org/abs/2508.16143v1) | 2025 | Online Instruction Correction | arXiv | - | - |
| [Prior Lessons of Incremental Dialogue and Robot Action Management for the Age of Language Models](http://arxiv.org/abs/2501.00953) | 2025 | Spoken Dialogue Management | arXiv | - | - |

### Social Listen (So1 Listen)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Perceptive Artificial Hearing Module for User Interfaces: Speaker Identification, Emotion Classification, and Spatial Localization](https://doi.org/10.1109/access.2026.3668088) | 2026 | Speaker Recognition | DOI | - | - |
| [A User Recognition Methodology Based on Voice Biometrics and Dynamic Clustering for Social Robots](https://doi.org/10.3390/app16094548) | 2026 | Speaker Recognition | DOI | - | - |
| [Paralinguistic Emotion-Aware Validation Timing Detection in Japanese Empathetic Spoken Dialogue](http://arxiv.org/abs/2603.09307v1) | 2026 | Paralinguistic Analysis | arXiv | - | - |
| [Speech-touch integration for affective human-robot interaction: a scoping review](https://doi.org/10.3389/frobt.2026.1785039) | 2026 | Paralinguistic Analysis | DOI | - | - |
| [Efficient Emotion-Aware Iconic Gesture Prediction for Robot Co-Speech](https://arxiv.org/abs/2604.11417) | 2026 | Multimodal Affect Recognition | arXiv | - | - |
| [Learning Physiology-Informed Vocal Spectrotemporal Representations for Speech Emotion Recognition](http://arxiv.org/abs/2602.13259v1) | 2026 | Speech Emotion Recognition | arXiv | - | - |

### Social Reason (So2 Reason)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Learning to Collaborate: Toward Robust, Adaptive Policies for Human-Robot Teams](https://hdl.handle.net/10919/143182) | 2026 | Trust and Relationship Modeling | Paper | - | - |
| [The Role of Perceived Moral Agency of a Humanoid Robot on the Willingness to Self-Disclose, Trustworthiness, Goodwill, and Liking](https://doi.org/10.1007/s12369-026-01405-y) | 2026 | Social Norm Modeling | DOI | - | - |
| [Engagement Is Not Transfer: A Withdrawal Study of a Consumer Social Robot with Autistic Children at Home](http://arxiv.org/abs/2604.02642v1) | 2026 | Engagement Modeling | arXiv | - | - |
| [Imagining human-robot encounters](https://doi.org/10.1075/is.25017.rau) | 2026 | Trust and Relationship Modeling | DOI | - | - |
| [Advancing human-AI teams: evolving from instrumental tools to trusted partners](https://doi.org/10.1007/s00146-026-02977-z) | 2026 | Trust and Relationship Modeling | DOI | - | - |
| [AI Ethics in Science Fiction Cinema: An Analysis of I, Robot (2004)](https://doi.org/10.69513/jndm.v3.i1.a8) | 2026 | Social Norm Modeling | DOI | - | - |

### Social Interact (So3 Interact)

| Paper | Year | Task | Link Type | GitHub | Stars |
| --- | --- | --- | --- | --- | --- |
| [Informing Robot Wellbeing Coach Design through Longitudinal Analysis of Human-AI Dialogue](http://arxiv.org/abs/2602.04478v1) | 2026 | Affective Response Generation | arXiv | - | - |
| [Exploring robot-led activities between people living with dementia and family care partners](https://doi.org/10.3389/frobt.2026.1772079) | 2026 | Affective Response Generation | DOI | - | - |
| [Synthetic Emotions vs. Gamification: Exploring Engagement Strategies for Small Social Robots in Different Age Groups](https://arxiv.org/abs/2605.27539) | 2026 | Affective Response Generation | arXiv | - | - |
| [Text-driven co-speech gesture generation for social robots using diffusion model](https://doi.org/10.25824/redu/5nd5n1) | 2026 | Co-Speech Gesture Generation | DOI | - | - |
| [Awakening Facial Emotional Expressions in Human-Robot](http://arxiv.org/abs/2510.23059v1) | 2025 | Facial Expression Generation | arXiv | - | - |
| [A Robot-Led Intervention for Emotion Regulation: From Expression to Reappraisal](http://arxiv.org/abs/2503.18243v2) | 2025 | Affective Response Generation | arXiv | - | - |
