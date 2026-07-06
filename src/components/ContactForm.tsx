"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2">
          お名前<span className="text-red-600">※</span>
        </label>
        <input required className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div>
        <label className="block mb-2">お電話番号</label>
        <input className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div>
        <label className="block mb-2">
          メールアドレス<span className="text-red-600">※</span>
        </label>
        <input
          required
          type="email"
          className="w-full border border-tt-border bg-tt-beige px-4 py-3"
        />
      </div>
      <div>
        <label className="block mb-2">
          お問い合わせ内容<span className="text-red-600">※</span>
        </label>
        <textarea
          required
          rows={6}
          className="w-full border border-tt-border bg-tt-beige px-4 py-3"
        />
      </div>
      <div className="text-center pt-4">
        <button
          type="submit"
          className="inline-block w-[220px] border border-tt-btn text-tt-btn px-5 py-3 font-semibold transition-colors duration-300 hover:bg-tt-btn hover:text-white"
        >
          入力内容を確認する
        </button>
      </div>
      {submitted && (
        <p className="text-center text-tt-green pt-4">
          ご入力ありがとうございます（デモフォームのため送信はされません）
        </p>
      )}
    </form>
  );
}
