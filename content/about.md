# About Me

## Summary

AI/ML researcher with a background in astrophysics and electrical engineering, focused on building practical intelligent systems that combine statistical modeling, multi-agent LLM architectures, and data pipelines. Experienced in designing end-to-end AI systems spanning web data ingestion, embedding databases, financial analysis agents, simulation frameworks, and geospatial visualization tools. Work includes developing multi-agent finance assistants, sentiment-augmented SARIMAX forecasting models for stock and crypto markets, and a B2B sales simulation pipeline that models decision-maker behavior through agent interactions. Earlier research applied deep learning to astrophysical anomaly detection, training CNNs to reconstruct 2D opacity maps from 1D transit light curves to explore potential megastructure signatures, with results presented at international conferences. Combines strong quantitative foundations with hands-on engineering across Python, TensorFlow, LLM APIs, time-series modeling, and data infrastructure, with a consistent focus on experimentation, observability, and translating research ideas into working systems.

---

# Work Experience

## ████████████

### AI/ML Researcher  
**March 2025 – Present**

#### AI Sales Simulation Pipeline (November 2025 – Present)

- Designed a multi-stage pipeline for simulating B2B sales interactions using data from Perplexity API, LinkedIn scraping (via Bright Data), and LLM-based summarization.
- Incorporated market research and decision-maker agents to evaluate message relevance and generate responses.
- Evolved architecture to include multi-agent simulation to mimic the Decision Maker Unit of a firm.

#### Financial Chat Bot (March – November 2025)

- Built a custom multi-agent framework using OpenAI Python SDK and gpt-5-mini for finance Q&A.
- Handled queries via async clients, XML-tagged prompts, and tool execution.
- Implemented routing via intent layer.
- Added edge case management (e.g., hypothetical queries, country-specific analysis).
- Built specialized agents for:
  - stock charts
  - web search
  - company finance reports
  - country economy graphs
- Focused on observability and token usage tracking.

#### Stock Price Prediction (May – November 2025)

- Created a SARIMAX-based model for forecasting stock and crypto closing prices over 5 days.
- Used 120 days of historical data augmented by LLM-driven sentiment analysis from web searches.
- Applied quadratic adjustment to predictions based on sentiment scores (0–100).
- Ensured non-negativity of predicted values.

#### Map Intelligence (April – May 2025)

- Vibecoded geospatial tools using MapLibre and Deck.gl for rendering economic data (e.g., GDP, population, unemployment).
- Used visualization layers like HexagonLayer and IconLayer.
- Integrated with agents for query-based visualizations.
- Handled time-series data and hover interactions.
- Explored:
  - base maps
  - GeoJSON boundaries
  - API keys for geocoding
- Enabled display of country and sector insights.

#### Finance DB (May 2025)

- Built a scraping and embedding pipeline for daily finance news from Yahoo and DuckDuckGo.
- Stored chunked data in PostgreSQL + pgvector with HNSW indexing.
- Automated collection for keywords across finance domains.
- Enabled similarity searches.
- Integrated with Insight Agent via DB agents and endpoints for query retrieval and analysis.

---

## ████████

### AI Research Intern  
**July – September 2024**

#### Text-To-Speech (TTS)

- Fine-tuned Text-to-Speech models such as VITS and StyleTTS2 on custom datasets.
- Ensured data preparation aligned with requirements such as:
  - transcribed WAV audio clips
  - metadata in CSV format
- Configured and executed multi-stage training for StyleTTS2 including:
  - first-stage acceleration
  - second-stage training
- Adjusted parameters for:
  - out-of-distribution data
  - minimum text length
  - batch percentages to mitigate OOM issues.
- Implemented structured dataset handling:
  - organized audio directories
  - text cleaners and formatters
  - single-file splitting
  - lossless audio formats.
- Added multispeaker support and speaker labels for voice cloning.
- Developed a complete voice cloning pipeline covering:
  - data formatting
  - normalization
  - training stages.
- Built a Gradio interface to make the pipeline accessible to non-technical users.

---

# Education

## ██████████████████████████████████████████

### Master of Science in Astronomy and Astrophysics  
**2022 – 2024**

#### MS Thesis Project  
**Alien Megastructures in Transit: Exploring Detection and Machine Learning Inference**  
(2023–2024)

**Advisor:** ███████████████████  
**Collaborators:** ███████████, ███████████, ███████████

- Designed and implemented a CNN in TensorFlow to reconstruct 2D opacity maps (38×38 pixels) from 1D transit light curves (120 data points).
- Achieved Folded MSE of 0.1615 on test data at SNR=500.
- Generated ~200,000 synthetic training light curves using Bézier curves and EightBitTransit simulations.
- Incorporated quadratic limb darkening and noise modeling across SNR 50–500.
- Evaluated performance using analytical planet light curves from BATMAN.
- Applied model to Kepler dataset and exocomet light curve fits.
- Identified performance limits in low-SNR cases and varying size ratios.
- Proposed improvements including expanded parameter spaces and improved noise modeling.

#### Conference Presentations

**Oral Talk**  
"Unveiling Alien Megastructures in Transit: Exploring Detection and Machine Learning Inference"  
Strange New Worlds: The Exploration of Exoplanets Conference — August 19, 2023

**Poster Presentation**  
"Exploring Alien Megastructures: Analyzing Transit Light Curves for Anomalies with Machine Learning"  
42nd Astronomical Society of India Meeting

**Virtual Oral Presentation**  
Interstellar Frontiers 2024 — Perth, Australia — March 13, 2024

---

## █████████████████████████████████

### BTech in Electrical and Electronics Engineering  
**2018 – 2022**

#### Summer Internship  
█████████████████████████████

- Designed an open-circuit fault-tolerant half-bridge LLC resonant converter for satellite applications.
- Simulated the system in LTSpice with 500kHz switching and 100W output.
- Implemented fault detection using resonant capacitor voltage monitoring.
- Achieved Zero Voltage Switching (ZVS) operation.
- Published results in IEEE SPICES 2022.

#### BTech Thesis  
**Thrust Vector Control (TVC) of Solid Propellant Model Rocket**

- Modeled 3DOF rocket dynamics in MATLAB/Simulink for pitch control.
- Implemented PID-based thrust vector control.
- Built a hardware prototype with Arduino Nano, MPU6050, and SG90 servo.
- Conducted hold-down tests and data logging.
- Published findings in IEEE INCOFT 2023.