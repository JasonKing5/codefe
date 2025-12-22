import { useLocation, Navigate } from 'react-router-dom';
import Wealth from "@/pages/wealth/index.jsx";

export default function ToolContainer() {
  const location = useLocation();

  // 检查 hash 是否为 #smart_finance
  if (location.hash === '#smart_finance') {
    return <Wealth />;
  }

  // 如果没有匹配的 hash，显示工具选择页面或重定向
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8">工具中心</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">智能财务</h2>
            <p className="text-muted-foreground mb-4">记录和管理个人财务收支</p>
            <a
              href="/tool/#smart_finance"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              打开工具
            </a>
          </div>
          {/* 可以添加更多工具卡片 */}
        </div>

        <div className="mt-12 p-6 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold mb-2">使用说明</h3>
          <p className="text-muted-foreground">
            点击上方卡片打开对应工具。URL 中的 # 符号用于标识具体工具。
          </p>
        </div>
      </div>
    </div>
  );
}