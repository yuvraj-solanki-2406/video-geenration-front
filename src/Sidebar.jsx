import React from 'react';
import './App.css';

const menuItems = [
    {
        title: "Dashboard",
        icon: "📊",
        href: "/",
    },
    {
        title: "IBot",
        icon: "🤖",
        href: "/ibot",
    },
    {
        title: "Courses",
        icon: "📚",
        href: "/courses",
    },
    {
        title: "Bucket List",
        icon: "✅",
        href: "/bucket-list",
    },
    {
        title: "Assistant",
        icon: "💬",
        href: "/assistant",
    },
];

export function Sidebar() {
    const [activePath, setActivePath] = React.useState("/");

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.href;
                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePath(item.href);
                            }}
                        >
                            {/* <span className="nav-icon">{items.icon}</span> */}
                            <span className="nav-text">{item.title}</span>
                        </a>
                    );
                })}
            </nav>
        </aside>
    );
}

