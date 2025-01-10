import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  // 定義狀態
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 處理輸入變更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 提交表單
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 返回編輯模式
  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h1>履歷生成器</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            姓名:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            電子郵件:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            學歷:
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            經歷:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            技能:
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            專案:
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">儲存履歷</button>
        </form>
      ) : (
        <div className="saved-resume">
          <h2>已儲存的履歷</h2>
          <p><strong>姓名:</strong> {formData.name}</p>
          <p><strong>電子郵件:</strong> {formData.email}</p>
          <p><strong>學歷:</strong> {formData.education}</p>
          <p><strong>經歷:</strong> {formData.experience}</p>
          <p><strong>技能:</strong> {formData.skills}</p>
          <p><strong>專案:</strong> {formData.projects}</p>
          <button className="secondary" onClick={handleEdit}>返回編輯</button>
        </div>
      )}
    </div>
  );
};

export default App;
