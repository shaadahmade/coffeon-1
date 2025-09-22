"use client"

import Logo from "./Logo"
import { useEffect, useRef, ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { gsap } from "gsap"

interface PageTransitionProps {
    children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    const logoOverlayRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const blockRef = useRef<HTMLDivElement[]>([]);
    const isTransitioning = useRef<boolean>(false);
    const linkHandlers = useRef<Map<Element, (e: Event) => void>>(new Map());

    useEffect(() => {
        const createBlocks = () => {
            if(!overlayRef.current) return;
            overlayRef.current.innerHTML = "";
            blockRef.current = [];

            for(let i = 0; i < 20; i++){
                const block = document.createElement("div");
                block.className = "block"
                overlayRef.current.appendChild(block);
                blockRef.current.push(block);
            }
        }
        
        createBlocks();

        gsap.set(blockRef.current, {scaleX: 0, transformOrigin: "left"})

        if (logoRef.current) {
            const path = logoRef.current.querySelector("path") as SVGPathElement;
            if(path) {
                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length, 
                    strokeDashoffset: length, 
                    fill: "transparent"
                });
            }
        }
        
        revealPage();

        const handleRouteChange = (url: string) => {
            if(isTransitioning.current) return;
            isTransitioning.current = true;
            coverPage(url);
        }

        // Clear previous handlers
        linkHandlers.current.forEach((handler, link) => {
            link.removeEventListener("click", handler);
        });
        linkHandlers.current.clear();

        const links = document.querySelectorAll<HTMLAnchorElement>(`a[href^="/"]`);
        
        links.forEach((link) => {
            const handler = (e: Event) => {
                e.preventDefault();
                const target = e.currentTarget as HTMLAnchorElement;
                const href = target.href;
                const url = new URL(href).pathname;
                if(url !== pathname) {
                    handleRouteChange(url);
                }                
            };
            
            // Store handler reference for cleanup
            linkHandlers.current.set(link, handler);
            link.addEventListener("click", handler);
        });

        return () => {
            // Cleanup all event listeners
            linkHandlers.current.forEach((handler, link) => {
                link.removeEventListener("click", handler);
            });
            linkHandlers.current.clear();
        }

    }, [router, pathname])

    const coverPage = (url: string) => {
        if (!logoRef.current) return;
        
        const path = logoRef.current.querySelector("path") as SVGPathElement;
        if (!path) return;

        const pathLength = path.getTotalLength();
        
        const tl = gsap.timeline({
            onComplete: () => router.push(url)  
        });
        
        tl.to(blockRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left"
        })
        .set(logoOverlayRef.current, {opacity: 1}, "-=0.2")
        .set(path, {
            strokeDashoffset: pathLength,
            fill: "transparent"
        }, "-=0.25")
        .to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
        }, "-=0.5")
        .to(path, {
            fill: "#e3e4d8",
            duration: 1,
            ease: "power2.out",
        }, "-=0.5")
        .to(logoOverlayRef.current, {
            opacity: 0, 
            duration: 0.25,
            ease: "power2.out",
        }); 
    }
 
    const revealPage = () => {
        gsap.set(blockRef.current, {scaleX: 1, transformOrigin: "right"});

        gsap.to(blockRef.current, {
            scaleX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
            }
        });
    }

    return (
        <>
            <div ref={overlayRef} className="transition-overlay"></div>
            <div ref={logoOverlayRef} className="logo-overlay">
                <div className="logo-container">
                    <Logo ref={logoRef}/>
                </div>
            </div>
            {children}
        </>
    )
}

export default PageTransition;
