import './captain.css';

function Captain() {
    return (
        <svg className="captain" viewBox="0 0 200 200" role="img" aria-label="Kapitan z fajką">
            {/* dym z fajki */}
            <g className="captain-smoke">
                <circle cx="148" cy="112" r="5" />
                <circle cx="148" cy="112" r="6" />
                <circle cx="148" cy="112" r="7" />
            </g>

            <g className="captain-body">
                {/* płaszcz */}
                <path d="M38 200 Q40 160 78 150 L122 150 Q160 160 162 200 Z" fill="var(--navy, #14263d)" />
                <path d="M86 150 L100 172 L114 150 Z" fill="#fff" />
                <circle cx="78" cy="180" r="3.5" fill="#d9a441" />
                <circle cx="122" cy="180" r="3.5" fill="#d9a441" />
                <path d="M40 192 H58 M142 192 H160" stroke="#d9a441" strokeWidth="3" strokeLinecap="round" />

                <g className="captain-head">
                    {/* twarz */}
                    <circle cx="100" cy="98" r="34" fill="#f0c8a0" />
                    <circle cx="66" cy="100" r="6" fill="#e8b78c" />
                    <circle cx="134" cy="100" r="6" fill="#e8b78c" />

                    {/* broda */}
                    <path
                        d="M65 98 Q60 152 100 160 Q140 152 135 98 Q128 120 100 120 Q72 120 65 98 Z"
                        fill="#fff"
                        stroke="var(--line, #e3ddd3)"
                        strokeWidth="1"
                    />

                    {/* policzki, nos */}
                    <circle cx="80" cy="106" r="5" fill="#eaa98c" opacity="0.6" />
                    <circle cx="120" cy="106" r="5" fill="#eaa98c" opacity="0.6" />
                    <ellipse cx="100" cy="107" rx="6.5" ry="5.5" fill="#e3a57e" />

                    {/* oczy i brwi */}
                    <g className="captain-eyes" fill="var(--navy, #14263d)">
                        <circle cx="87" cy="95" r="3" />
                        <circle cx="113" cy="95" r="3" />
                    </g>
                    <path
                        d="M79 87 Q87 82 94 87 M106 87 Q113 82 121 87"
                        stroke="#fff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* wąsy */}
                    <path d="M100 113 Q88 108 76 118 Q90 126 100 117 Q110 126 124 118 Q112 108 100 113 Z" fill="#fff" stroke="var(--line, #e3ddd3)" strokeWidth="1" />

                    {/* czapka */}
                    <path d="M56 70 Q56 34 100 34 Q144 34 144 70 Q100 54 56 70 Z" fill="#fff" stroke="var(--line, #e3ddd3)" strokeWidth="1" />
                    <path d="M62 82 Q100 66 138 82 L140 69 Q100 53 60 69 Z" fill="var(--navy, #14263d)" />
                    <path d="M60 81 Q100 68 140 81 Q100 92 60 81 Z" fill="#0c1826" />
                    <circle cx="100" cy="66" r="7" fill="#d9a441" />
                    <path
                        d="M100 62 V70 M97 64 H103 M96 68 Q100 72 104 68"
                        stroke="var(--navy, #14263d)"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* fajka */}
                    <g className="captain-pipe">
                        <path d="M108 123 Q124 136 142 134" stroke="var(--wood, #8a5a34)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                        <path d="M138 118 H158 L156 136 Q148 142 140 136 Z" fill="#5b3a21" />
                        <ellipse className="captain-ember" cx="148" cy="118" rx="10" ry="2.6" fill="#e8742a" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Captain;
