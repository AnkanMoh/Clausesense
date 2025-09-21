**ClauseSense -- AI Legal Navigator**

ClauseSense is a **Google Cloud--powered web application** that simplifies complex legal documents into clear, actionable guidance. By leveraging **Document AI, Vertex AI (Gemini + Embeddings), and Matching Engine**, ClauseSense makes legal contracts understandable and transparent for everyday users and small businesses.

**🚀 Features**

-  **Upload & Analyze**: Upload contracts, leases, or terms of service (PDF).

-  **Plain-Language Summaries**: Rights, obligations, fees, and key dates explained simply.

-  **Red-Flag Alerts**: Highlights hidden risks and unfavorable clauses.

-  **Interactive Q&A**: Ask questions and receive grounded answers with clause citations.

-  **Contract Comparison**: Side-by-side analysis of multiple contracts.

-  **Risk Meter**: Visual indicator (Low/Medium/High) of contract risk.

-  **Export**: Download summaries and Q&A results in JSON or PDF.

-  **Privacy-First**: Data is processed securely on Google Cloud.

**🏗️ Architecture**

-  **Frontend**: React / Next.js, minimalist UI (Inter/Roboto, white + navy palette).

-  **Backend**: Node.js (Express) or Python (FastAPI) on Cloud Run.

-  **Services**:

-  **Google Cloud Storage** -- store uploaded documents.

-  **Document AI** -- OCR and parse contracts.

-  **Vertex AI Gemini** -- generate summaries and Q&A.

-  **Vertex AI Embeddings + Matching Engine** -- semantic clause retrieval.

-  **Firestore / BigQuery** -- metadata and structured results.

**📂 Project Structure**

/frontend   # React/Next.js app

/backend    # API (Node.js/Express or Python/FastAPI)

  ├── routes

  ├── models

  └── services

/config     # Environment configs

/docs       # Documentation and diagrams

**⚙️ Setup & Installation**

**Prerequisites**

-  Node.js 18+ or Python 3.11+

-  Google Cloud project with APIs enabled:

-  Document AI

-  Vertex AI

-  Cloud Run

-  Firestore

-  Cloud Storage

**Installation**

*# Clone the repo*

git clone https://github.com/your-username/clausesense.git

cd clausesense

*# Install frontend*

cd frontend

npm install

npm run dev

*# Install backend*

cd ../backend

npm install   *# or pip install -r requirements.txt*

**Environment Variables**

Create a .env file in /backend:

GCP_PROJECT=your-project-id

REGION=us-central1

RAW_BUCKET=clausesense-uploads

DOC_AI_PROCESSOR_ID=your-processor-id

**▶️ Usage**

1.  Start the frontend and backend.

2.  Upload a PDF contract from the dashboard.

3.  View the summary, red flags, and risk score.

4.  Ask questions in the chat panel and get clause-based answers.

5.  Compare multiple documents.

6.  Export results as JSON or PDF.

**🧪 Testing**

*# Frontend tests*

cd frontend

npm run test

*# Backend tests*

cd backend

npm run test   *# or pytest*

**📊 Demo**

(Add screenshots or a link to your deployed demo here.)

**🔒 Disclaimer**

ClauseSense is an **educational and informational tool**. It is **not a substitute for professional legal advice**. Always consult a qualified lawyer for legal matters.

**📜 License**

MIT License. See <LICENSE> for details.
