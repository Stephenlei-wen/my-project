import React from "react";

export default function App() {
  const info = {
    name: "温鹏磊2222",
    title: "前端开发工程师",
    location: "上海 · 中国",
    email: "you@example.com",
    github: "https://github.com/yourname",
    intro:
      "X 年前端开发经验，熟悉 React 技术栈，热爱打造体验友好的 Web 应用，关注代码质量与工程效率。",
    skills: [
      "JavaScript / TypeScript",
      "React / React Router / Redux",
      "HTML5 / CSS3 / Tailwind / Ant Design",
      "Node.js / 简单后端接口联调",
      "Git / Linux / 简单部署运维"
    ],
    experiences: [
      {
        company: "某互联网公司",
        role: "前端工程师",
        period: "2022.03 - 至今",
        description:
          "负责公司核心业务后台前端开发与维护，主导多个功能模块从需求评审到上线的完整流程。"
      },
      {
        company: "某科技公司",
        role: "前端开发",
        period: "2020.06 - 2022.02",
        description:
          "参与官网和活动页的搭建与性能优化，配合设计与后端完成高质量还原与联调。"
      }
    ],
    projects: [
      {
        name: "个人博客平台",
        tech: "React + Vite + Node.js",
        description: "从零搭建个人博客网站，支持 Markdown 写作、标签分类与搜索。"
      },
      {
        name: "在线简历生成器",
        tech: "React + Ant Design",
        description: "提供多个简历模板，支持在线编辑与一键导出 PDF。"
      }
    ]
  };

  const containerStyle = {
    minHeight: "100vh",
    margin: 0,
    padding: "32px 16px",
    display: "flex",
    justifyContent: "center",
    background:
      "radial-gradient(circle at top left, #4f46e5 0, transparent 50%), radial-gradient(circle at bottom right, #06b6d4 0, #020617 50%)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    color: "#0f172a",
    boxSizing: "border-box"
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "900px",
    backgroundColor: "rgba(15, 23, 42, 0.96)",
    borderRadius: "18px",
    padding: "28px 26px",
    boxShadow:
      "0 24px 60px rgba(15, 23, 42, 0.65), 0 0 0 1px rgba(148, 163, 184, 0.08)",
    boxSizing: "border-box",
    color: "#e5e7eb"
  };

  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#9ca3af",
    marginBottom: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* 头部：姓名 + 基本信息 */}
        <header
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "16px",
            borderBottom: "1px solid rgba(148, 163, 184, 0.4)",
            paddingBottom: "18px",
            marginBottom: "18px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#f9fafb"
              }}
            >
              {info.name}
            </h1>
            <div
              style={{
                marginTop: "6px",
                fontSize: "15px",
                color: "#e5e7eb"
              }}
            >
              {info.title}
            </div>
            <div
              style={{
                marginTop: "4px",
                fontSize: "13px",
                color: "#9ca3af"
              }}
            >
              {info.location}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "4px",
              fontSize: "13px",
              minWidth: "180px"
            }}
          >
            <a
              href={`mailto:${info.email}`}
              style={{
                color: "#bfdbfe",
                textDecoration: "none"
              }}
            >
              {info.email}
            </a>
            <a
              href={info.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#a5b4fc",
                textDecoration: "none"
              }}
            >
              {info.github}
            </a>
          </div>
        </header>

        {/* 简介 + 技能 */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.4fr)",
            gap: "20px",
            marginBottom: "22px"
          }}
        >
          <div>
            <div style={sectionTitleStyle}>个人简介</div>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#e5e7eb"
              }}
            >
              {info.intro}
            </p>
          </div>

          <div>
            <div style={sectionTitleStyle}>技能栈</div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              }}
            >
              {info.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(55, 65, 81, 0.9)",
                    fontSize: "12px",
                    color: "#e5e7eb"
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 工作经历 */}
        <section style={{ marginBottom: "20px" }}>
          <div style={sectionTitleStyle}>工作经历</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {info.experiences.map((exp) => (
              <div
                key={exp.company + exp.period}
                style={{
                  padding: "10px 12px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(30,64,175,0.45), rgba(15,23,42,0.8))",
                  border: "1px solid rgba(129, 140, 248, 0.35)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "2px"
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#e5e7eb"
                    }}
                  >
                    {exp.company} · {exp.role}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#c4b5fd",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {exp.period}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#e5e7eb"
                  }}
                >
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 项目经历 */}
        <section style={{ marginBottom: "8px" }}>
          <div style={sectionTitleStyle}>项目经历</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "14px"
            }}
          >
            {info.projects.map((project) => (
              <div
                key={project.name}
                style={{
                  padding: "10px 12px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "1px solid rgba(75, 85, 99, 0.9)"
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#f9fafb",
                    marginBottom: "4px"
                  }}
                >
                  {project.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#a5b4fc",
                    marginBottom: "4px"
                  }}
                >
                  {project.tech}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#e5e7eb",
                    lineHeight: 1.6
                  }}
                >
                  {project.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 页脚 */}
        <footer
          style={{
            marginTop: "12px",
            paddingTop: "10px",
            borderTop: "1px dashed rgba(75, 85, 99, 0.8)",
            fontSize: "11px",
            color: "#6b7280",
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            flexWrap: "wrap"
          }}
        >
          <span>本页面由 React + Vite 构建</span>
          <span>如需 PDF 简历，可在浏览器中使用“打印 → 另存为 PDF”</span>
        </footer>
      </div>
    </div>
  );
}

