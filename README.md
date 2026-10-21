# Практика JavaScript, TypeScript и React

Личный репозиторий для практики frontend-разработки: от экспериментов с
чистым JavaScript до приложений на React и TypeScript.

## Проекты

| Каталог | Назначение | Стек |
| --- | --- | --- |
| `projects/pure-js` | Упражнения и эксперименты с браузерным JavaScript | JavaScript, HTML, CSS, Vite |
| `projects/React-fsd-boilerplate` | Практика React и архитектуры Feature-Sliced Design | React, TypeScript, Vite, Tailwind CSS |

## Требования

- Git;
- Node.js LTS и npm;
- Git Flow — для работы по принятой схеме ветвления;
- GitHub CLI — необязательно, для работы с GitHub из терминала;
- MSYS2 UCRT64 или Git Bash — необязательно, если нужен Unix-подобный терминал в Windows.

Проверьте установленные инструменты:

```bash
git --version
node --version
npm --version
git flow version
```

## Установка

```bash
git clone git@github.com:aayurchenko/2026--work--practice-js-react.git
cd 2026--work--practice-js-react

npm ci
npm --prefix projects/pure-js ci
npm --prefix projects/React-fsd-boilerplate ci
```

Если SSH ещё не настроен, репозиторий можно клонировать по HTTPS:

```bash
git clone https://github.com/aayurchenko/2026--work--practice-js-react.git
```

## Запуск

Pure JavaScript:

```bash
npm --prefix projects/pure-js run dev
```

React:

```bash
npm --prefix projects/React-fsd-boilerplate run dev
```

## Проверка сборки

```bash
npm --prefix projects/pure-js run build
npm --prefix projects/React-fsd-boilerplate run build
npm --prefix projects/React-fsd-boilerplate run lint
```

## Работа с репозиторием

В проекте используются:

- `master` — стабильная история проекта;
- `develop` — основная ветка разработки;
- `feature/*` — отдельные задачи;
- Conventional Commits — единый формат сообщений коммитов;
- `CHANGELOG.md` — история выпущенных и ещё не выпущенных изменений.

Подробная памятка по настройке нового компьютера, feature-веткам,
коммитам, changelog и синхронизации находится в
[docs/WORKFLOW.md](docs/WORKFLOW.md).

## Основные команды

Создать оформленный коммит:

```bash
git add -A
npm run commit
```

Обновить раздел `Unreleased` в changelog:

```bash
npm run changelog
```

## Changelog

История изменений находится в [CHANGELOG.md](CHANGELOG.md).
