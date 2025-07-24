"use client";
import React from 'react'
import { useDataContext } from '../Context/data';
import { useRouter } from 'next/navigation';
import { Shield, ArrowLeft, Globe, Calendar, User, Server, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

function page() {
    const { geminiData, whoisData } = useDataContext();
    const router = useRouter();

    const getLabelColor = (label) => {
        switch (label.toLowerCase()) {
            case "real": return "bg-secure text-secure-foreground";
            case "suspicious": return "bg-warning text-warning-foreground";
            case "fake": return "bg-danger text-danger-foreground";
            default: return "bg-muted text-muted-foreground";
        }
    };

    const getLabelIcon = (label) => {
        switch (label.toLowerCase()) {
            case "real": return <CheckCircle className="h-4 w-4" />;
            case "suspicious": return <AlertTriangle className="h-4 w-4" />;
            case "fake": return <XCircle className="h-4 w-4" />;
            default: return <Info className="h-4 w-4" />;
        }
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-green-50/20'>
            {/* Header */}
            <header className="border-b bg-card/50  backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                size="sm"
                                onClick={() => router.push("/")}
                                className="flex items-center gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Search
                            </button>
                            <div className="flex items-center space-x-2">
                                <Shield className="h-6 w-6 text-blue-800" />
                                <span className="text-xl font-bold text-blue-800">InterSecure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Main Results Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold">Verification Results</h1>
                        <Badge className={getLabelColor(geminiData.label)} variant="secondary">
                            <span className="flex items-center gap-2">
                                {getLabelIcon(geminiData.label)}
                                {geminiData.label}
                            </span>
                        </Badge>
                    </div>
                    <p className="text-muted-foreground">
                        Analysis completed for: <span className="font-medium">{whoisData.domainName}</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default page
