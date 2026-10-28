import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, X, Bot, Loader2, ArrowRight } from 'lucide-react';
import { useProposal } from '../context/ProposalContext';

export default function ProposalUploadModal() {
  const { isUploadModalOpen, setIsUploadModalOpen, generateFromPdf, isGenerating, progress } = useProposal();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef(null);

  if (!isUploadModalOpen) return null;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    setErrorMsg('');
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('Please select a valid PDF file.');
      setSelectedFile(null);
      return;
    }
    if (file.size > 30 * 1024 * 1024) {
      setErrorMsg('File size exceeds 30MB limit.');
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleStartGeneration = async () => {
    if (!selectedFile) {
      setErrorMsg('Please upload a PDF file first.');
      return;
    }
    try {
      await generateFromPdf(selectedFile);
      setIsUploadModalOpen(false);
      setSelectedFile(null);
      // Smooth scroll to top of cover
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to process PDF. Please try another file.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in print:hidden">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden relative animate-scale-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            onClick={() => !isGenerating && setIsUploadModalOpen(false)}
            disabled={isGenerating}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition disabled:opacity-50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48B83B]/20 text-[#48B83B] border border-[#48B83B]/30 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Automated Proposal Engine</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            Generate New Proposal from PDF
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
            Upload any SEO audit PDF. The engine will inspect every page, extract technical errors, metrics, and rankings, and auto-build a custom interactive proposal.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          
          {/* Progress State */}
          {isGenerating ? (
            <div className="py-8 px-4 text-center space-y-4">
              <div className="relative flex justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-100 border-t-[#48B83B] animate-spin flex items-center justify-center">
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-slate-700">
                  {progress.percent}%
                </div>
              </div>

              <div>
                <h3 className="text-base font-black text-slate-900">
                  Processing & Analyzing PDF...
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 animate-pulse">
                  {progress.message || 'Extracting audit pages and computing metrics...'}
                </p>
              </div>

              {/* Progress bar line */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                <div
                  className="bg-[#48B83B] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progress.percent}%` }}
                ></div>
              </div>

              <div className="text-[11px] text-slate-400 font-medium">
                Please wait a moment while the comprehensive roadmap is constructed.
              </div>
            </div>
          ) : (
            <>
              {/* File Drop Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                  dragActive
                    ? 'border-[#48B83B] bg-emerald-50/60 scale-[1.01]'
                    : selectedFile
                    ? 'border-[#48B83B] bg-emerald-50/30'
                    : 'border-slate-300 hover:border-slate-400 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="hidden"
                />

                {selectedFile ? (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#48B83B] flex items-center justify-center mx-auto">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm text-slate-900 block truncate max-w-sm mx-auto">
                        {selectedFile.name}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to analyze
                      </span>
                    </div>
                    <div className="pt-1">
                      <span className="text-xs text-[#48B83B] font-bold underline">
                        Click to change file
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                      <UploadCloud className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-slate-800 block">
                        Drag and drop your SEO Audit PDF here
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        or click to browse from your computer (Max 30MB)
                      </span>
                    </div>
                    <span className="inline-block text-[11px] font-bold text-slate-400 bg-slate-200/60 px-2.5 py-0.5 rounded">
                      Supports Seoptimer, Semrush, Ahrefs & Agency Audits
                    </span>
                  </div>
                )}
              </div>

              {/* Error Notice */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Instructions */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <span className="font-bold text-slate-800 block">⚡ What happens after upload:</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-500 text-[11px]">
                  <li>Domain & company name auto-extracted</li>
                  <li>PageSpeed scores, Core Web Vitals & critical failures identified</li>
                  <li>Top ranking keywords & search volume mapped</li>
                  <li>6-Month tailored SEO roadmap generated to fix all findings</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleStartGeneration}
                  disabled={!selectedFile}
                  className="px-6 py-2.5 rounded-lg bg-[#48B83B] hover:bg-emerald-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-xs transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>Analyze & Generate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
