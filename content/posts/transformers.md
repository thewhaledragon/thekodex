---
title: "Transformers"
date: "2026-03-11"
tag: "Deep Learning"
excerpt: "Transformers remain the dominant architecture across almost every modality that involves sequence + long-range dependency."
subtitle: "The Transformer family tree in early 2026 — who’s actually shipping at scale"
---

# Transformers
Transformers remain the dominant architecture across almost every modality that involves sequence + long-range dependency.

## Core Idea in One Sentence

Replace fixed-window recurrence and convolutions with **content-addressable memory accessed via dot-product attention** — letting every position directly attend to every other position in one step.

## Minimal Equations – The Absolute Essence

$$
\text{Attention}(Q, K, V) = \mathrm{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

$$
\begin{align*}
Q &= X W^Q, & K &= X W^K, & V &= X W^V \\
\text{MultiHead} &= \mathrm{Concat}(\mathrm{head}_1, \dots, \mathrm{head}_h) W^O \\
\mathrm{head}_i &= \mathrm{Attention}(X W_i^Q, X W_i^K, X W_i^V)
\end{align*}
$$

## 2025–2026 Reality Check – What Actually Won

| Architecture family       | Still dominant in 2026? | Typical parameter efficiency | Main remaining stronghold(s)               | Main weaknesses in 2026                     |
|---------------------------|---------------------------|-------------------------------|---------------------------------------------|---------------------------------------------|
| Vanilla Transformer       | No                        | ★☆☆☆☆                         | legacy codebases                            | quadratic memory, slow inference            |
| Decoder-only (GPT-style)  | Yes ★★★★★                 | ★★★★☆                         | general-purpose language, agents, reasoning | inference cost still hurts at 1T+ scale     |
| Encoder-decoder (T5/UL2)  | Somewhat                  | ★★★☆☆                         | translation, long-document summarization    | usually outperformed by decoder-only        |
| Encoder-only (BERT-style) | Niche                     | ★★★★☆                         | embedders, rerankers, late-interaction IR   | almost disappeared from frontier chat       |
| MoE Transformers          | Yes ★★★★☆                 | ★★★★★                         | frontier models (Grok, Llama-4, Claude-4…)  | routing collapse, load-balancing pain       |
| Mamba / SSM hybrids       | Rising fast               | ★★★★★★                        | long-context efficiency sweet spot          | still weaker at very strong reasoning       |
| RWKV / RetNet / GLA       | Niche but alive           | ★★★★★                         | on-device, infinite-context hobby projects  | training stability & scaling laws weaker    |
| xLSTM / mLSTM             | Emerging                  | ★★★★★                         | trying to reclaim recurrent crown           | too new – jury still out                    |

## Most Important Practical Patterns in 2026

- **Grouped-Query Attention (GQA)** → almost universal (8–32× memory saving vs MQA)
- **Rotary Embeddings (RoPE)** → still the most popular positional encoding
- **SwiGLU / GeGLU** → clearly beat GELU almost everywhere
- **RMSNorm** instead of LayerNorm → ≈0.5–1% gain for free
- **SParSe Upcycling** / **Tie embeddings + shared head** → common at 70B+
- **YaRN / NTK-aware scaling** → de-facto for context > 128k
- **Unsloth / QLoRA / ReLoRA** training tricks → made 70–405B fine-tuning realistic on consumer hardware

## Context Lengths You Actually See in Production (early 2026)

- Consumer chat             8k–32k  
- Agent / tool-use          32k–128k  
- Code / RAG / enterprise  128k–1M  
- Research / long-book      1M–4M (mostly synthetic data)  
- True long-context leaders 8M–16M tokens (needle-in-haystack still brittle above ~2M)

## Quick Reference – Landmark Models & Their Architectural Choices (2024–early 2026)

| Model family     | GQA? | RoPE? | Activation | MoE? | Native context | Release window |
|------------------|------|-------|------------|------|----------------|----------------|
| Llama 3 / 3.1    | Yes  | Yes   | SiLU       | No   | 128k           | 2024           |
| Qwen 2.5         | Yes  | Yes   | SiLU       | No   | 128k–1M        | 2024–2025      |
| DeepSeek-V3      | Yes  | Yes   | SwiGLU     | Yes  | 128k           | late 2024      |
| Grok-2 / Grok-3  | Yes  | Yes   | GeGLU      | Yes  | 128k+          | 2025           |
| Claude 4 family  | Yes  | Yes   | —          | Yes  | 200k–500k      | 2025–2026      |
| Gemini 2.0 / 2.5 | Yes  | No*   | GeGLU      | Yes  | 1M–2M native   | 2025           |
| Llama 4 ?        | Yes  | Yes   | SwiGLU     | Yes  | 256k–1M?       | expected 2026  |

(*Gemini uses a learned absolute + relative hybrid in many versions)

## One-paragraph Summary for 2026

The transformer did **not** get replaced — it **evolved**. In 2026 the winning recipe is usually: decoder-only + RoPE + SwiGLU/GeGLU + RMSNorm + GQA + MoE routing (or dense at <70B) + post-training context extension tricks. Everything else (pure Mamba, hybrid SSM-Transformer, linear attention, etc.) is either niche, on-device, long-context specialist, or still trying to cross the reasoning quality gap that dense/MoE transformers maintain.
