"use client"
import React from "react";
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    Briefcase
} from "lucide-react";

interface SidebarProps {
    className?: string;
    onNavigate?: (path: string) => void;
    activeItem?: string;
}

const Sidebar = ({
    className = "",
    onNavigate = () => { },
    activeItem = "dashboard",
}: SidebarProps) => {
    const menuItems = [
        { id: "dashboard", label: "Painel", icon: LayoutDashboard },
        { id: "services", label: "Serviços", icon: Briefcase },
        { id: "clients", label: "Clientes", icon: Users },
        { id: "proposals", label: "Propostas", icon: FileText },
        { id: "settings", label: "Configurações", icon: Settings },
    ];

    return (
        <div
            className={"w-[280px] h-full bg-white border-r px-3 py-4 flex flex-col"}
        >
            <div className="flex items-center justify-center mb-8">
                <h1 className="text-2xl font-bold text-primary">ePeritos</h1>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (

                        <button
                            key={item.id}
                            className={`w-full justify-start gap-3 h-12 ${activeItem ? "bg-green-600" : "bg-orange-600" }`}
                            onClick={() => onNavigate(item.id)} 
                        >
                            <Icon className="h-5 w-5" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
