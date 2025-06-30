import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // корневая директория (по умолчанию текущая)
    build: {
        outDir: 'dist', // куда будет собираться проект
    },
    server: {
        port: 3000, // порт локального сервера
        open: true, // открывать ли браузер автоматически
    },
});
