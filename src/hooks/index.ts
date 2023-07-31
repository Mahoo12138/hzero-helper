import { useState, useEffect } from 'react';

// 自定义 Hook：用于读取和写入油猴数据
export function useGMStore<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    // 初始化时从油猴数据中读取值，如果不存在则使用默认值
    return window.GM.getValue(key, defaultValue) as T;
  });

  useEffect(() => {
    // 组件卸载时保存最新的值到油猴数据
    return () => {
      window.GM.setValue(key, value);
    };
  }, [key, value]);

  return [value, setValue] as const;
}