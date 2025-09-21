import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dashboard } from "./components/Dashboard";
import { SummaryView } from "./components/SummaryView";
import { QAView } from "./components/QAView";
import { ComparisonView } from "./components/ComparisonView";
import { Scale, Upload, FileText, MessageCircle, GitCompare } from "lucide-react";

interface Document {
  id: string;
  name: string;
  uploadDate: string;
  type: string;
}

export default function App() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
    setActiveTab("summary");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">ClauseSense</h1>
            </div>
            <p className="text-sm text-gray-600 hidden sm:block">
              AI-powered legal document assistant
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="summary" 
              className="flex items-center gap-2"
              disabled={!selectedDocument}
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Summary</span>
            </TabsTrigger>
            <TabsTrigger 
              value="qa" 
              className="flex items-center gap-2"
              disabled={!selectedDocument}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Q&A</span>
            </TabsTrigger>
            <TabsTrigger value="compare" className="flex items-center gap-2">
              <GitCompare className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-0">
            <Dashboard onDocumentSelect={handleDocumentSelect} />
          </TabsContent>

          <TabsContent value="summary" className="mt-0">
            {selectedDocument ? (
              <SummaryView document={selectedDocument} />
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Document Selected
                </h3>
                <p className="text-gray-600">
                  Please select a document from the dashboard to view its summary.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="qa" className="mt-0">
            {selectedDocument ? (
              <QAView document={selectedDocument} />
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Document Selected
                </h3>
                <p className="text-gray-600">
                  Please select a document from the dashboard to start asking questions.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="compare" className="mt-0">
            <ComparisonView />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Privacy Notice:</strong> Your documents are processed securely and never shared with third parties.
            </p>
            <p>
              ClauseSense is for informational purposes only and does not constitute legal advice. 
              Please consult with a qualified attorney for legal guidance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}