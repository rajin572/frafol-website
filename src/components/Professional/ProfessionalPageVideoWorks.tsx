"use client";
import { getServerUrl } from '@/helpers/config/envConfig';
import React, { useCallback, useRef } from 'react';

const ProfessionalPageVideoWorks = ({ galleryVideos }: { galleryVideos: string[] }) => {

    const serverUrl = getServerUrl();
    const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

    const handlePlay = useCallback((currentIndex: number) => {
        videoRefs.current.forEach((video, idx) => {
            if (!video) return;
            if (idx !== currentIndex && !video.paused) {
                video.pause();
            }
        });
    }, []);

    return (
        <div className="flex flex-wrap gap-4">
            {galleryVideos?.slice(0, 3)?.map((item, index) => (
                <div key={index} className="relative group aspect-video h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <video
                        ref={(el) => {
                            videoRefs.current[index] = el;
                        }}
                        src={serverUrl + item}
                        controls
                        className="w-full h-full object-cover rounded-lg"
                        preload="metadata"
                        controlsList="nodownload noplaybackrate"
                        onPlay={() => handlePlay(index)}

                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalPageVideoWorks;