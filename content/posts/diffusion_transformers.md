---
title: "Diffusion Transformers (DiT)"
date: "2026-03-12"
tag: "Deep Learning"
excerpt: "Diffusion Transformers (DiT) are the modern backbone of high-quality image and video generation, replacing convolutional U-Net diffusion models in most state-of-the-art systems."
subtitle: "How transformer-based denoisers replaced U-Nets in modern diffusion models"
---

# Diffusion Transformers (DiT)

Diffusion Transformers are a type of generative model used to create images and videos. Earlier diffusion systems used convolutional U-Nets to gradually remove noise from images during generation. DiT replaces that backbone with a vision transformer, allowing the model to process the entire image through attention-based tokens rather than local convolution filters.

The image (usually a compressed latent representation from a VAE) is split into patches and turned into tokens, similar to how transformers process words in text models. The transformer then repeatedly refines these tokens while conditioning on information like timestep and text prompts. Because attention allows every patch to interact with every other patch, the model can understand global structure much more easily than convolutional networks.

By 2026, most frontier image and video generators use DiT-style architectures. They scale better with larger model sizes, produce more coherent scenes, and integrate text or multimodal inputs more naturally. Improvements such as joint text–image attention and modern diffusion objectives further improved quality, which is why most new high-end generative systems now rely on diffusion transformers rather than traditional U-Net diffusion models.
