# Рабочий процесс

Эта памятка описывает настройку репозитория и повседневную работу с ним.
Она рассчитана в том числе на возвращение к проекту после долгого перерыва
или продолжение работы на другом компьютере.

## 1. Настройка нового компьютера

Установите Git, Node.js LTS с npm, Git Flow и при необходимости GitHub CLI,
MSYS2 UCRT64 или Git Bash.

Проверьте инструменты:

```bash
git --version
node --version
npm --version
git flow version
gh --version
```

Настройте автора Git. Используйте email, добавленный в аккаунт GitHub:

```bash
git config --global user.name "Tema Yurchenko"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Клонируйте репозиторий и установите зависимости:

```bash
git clone git@github.com:aayurchenko/2026--work--practice-js-react.git
cd 2026--work--practice-js-react
git fetch origin --tags --prune

npm ci
npm --prefix projects/pure-js ci
npm --prefix projects/React-fsd-boilerplate ci
```

Git Flow хранит конфигурацию в локальном каталоге `.git`, поэтому после
нового клонирования его нужно инициализировать повторно:

```bash
git flow init
```

Используйте такие значения:

```text
Production branch: master
Development branch: develop
Feature prefix: feature/
Bugfix prefix: bugfix/
Release prefix: release/
Hotfix prefix: hotfix/
Support prefix: support/
Version tag prefix: v
```

Проверьте конфигурацию:

```bash
git config --get-regexp '^gitflow\.'
```

## 2. Начало рабочего сеанса

Перед изменением файлов получите актуальный `develop`:

```bash
git switch develop
git fetch origin --tags --prune
git pull --ff-only origin develop
git status
```

Не начинайте новую работу при наличии непонятных незакоммиченных изменений.
Сначала выясните, откуда они появились, и сохраните либо отмените их.

## 3. Создание feature-ветки

С помощью Git Flow:

```bash
git flow feature start task-name
```

Без Git Flow:

```bash
git switch -c feature/task-name develop
```

Используйте короткое название задачи латиницей и через дефисы, например:

```text
feature/task-list
feature/pure-js-arrays
feature/react-auth-form
```

## 4. Создание коммитов

Перед коммитом проверьте изменения:

```bash
git status
git diff
```

Добавьте нужные файлы и ещё раз проверьте подготовленный коммит:

```bash
git add -A
git diff --cached
```

Запустите интерактивное создание Conventional Commit:

```bash
npm run commit
```

Примеры сообщений:

```text
feat(pure-js): add array exercises
fix(react): prevent duplicate form submission
docs(main): update project instructions
chore(deps): update development dependencies
```

| Тип | Когда использовать |
| --- | --- |
| `feat` | Новая возможность |
| `fix` | Исправление ошибки |
| `docs` | Только документация |
| `refactor` | Переработка кода без изменения поведения |
| `test` | Тесты |
| `chore` | Обслуживание проекта и инструменты |

## 5. Сохранение незавершённой feature-ветки

Если работу нужно продолжить на другом компьютере, отправьте ветку:

```bash
git push -u origin feature/task-name
```

На другом компьютере получите её:

```bash
git fetch origin --prune
git switch --track origin/feature/task-name
```

Если локальная ветка уже существует:

```bash
git switch feature/task-name
git pull --ff-only
```

## 6. Завершение feature-ветки

Убедитесь, что всё сохранено и нужные проверки проходят:

```bash
git status
npm --prefix projects/pure-js run build
npm --prefix projects/React-fsd-boilerplate run build
npm --prefix projects/React-fsd-boilerplate run lint
```

Запускайте только проверки затронутого проекта. Затем завершите feature:

```bash
git flow feature finish task-name
git push origin develop
```

Если Git Flow не инициализирован, выполните слияние обычным Git:

```bash
git switch develop
git merge --no-ff feature/task-name
git push origin develop
git branch -d feature/task-name
```

## 7. Обновление changelog без релиза

Команда формирует раздел `Unreleased` из Conventional Commits после
последнего тега:

```bash
git switch develop
npm run changelog
git diff -- CHANGELOG.md
```

Если результат корректный:

```bash
git add CHANGELOG.md
git commit -m "docs(release): update unreleased changelog"
git push origin develop
```

По стандартной конфигурации в changelog прежде всего попадают `feat` и
`fix`. Merge-коммиты и служебные типы вроде `docs` обычно скрываются.

Обновление раздела `Unreleased` не создаёт релиз, не меняет версию и не
создаёт Git-тег.

## 8. Синхронизация между компьютерами

Перед завершением работы на первом компьютере:

```bash
git status
git push
```

Незакоммиченные изменения Git не синхронизирует. Сначала создайте коммит
или временно сохраните изменения осознанным способом.

На втором компьютере перед началом работы:

```bash
git fetch origin --tags --prune
git switch develop
git pull --ff-only origin develop
git status
```

## 9. Работа с `master` и `develop`

Обычная разработка ведётся в `develop`. Не создавайте feature-ветки от
`master`, если для этого нет специальной причины.

Если отдельный коммит сначала появился в `master` и должен стать частью
общей истории `develop`, объедините ветки:

```bash
git switch develop
git merge master
git push origin develop
```

При таком слиянии один и тот же коммит становится доступен в обеих ветках.
`cherry-pick` создаёт новый коммит с другим идентификатором и нужен для
другого сценария.

## 10. Подготовка релиза

Релиз создавайте только когда изменения действительно готовы к публикации:

```bash
git switch develop
git pull --ff-only origin develop
git flow release start 1.1.0
npm run changelog
git add CHANGELOG.md
git commit -m "docs(release): update changelog for 1.1.0"
git flow release finish -m "Release 1.1.0" 1.1.0
git push origin master
git push origin develop
git push origin v1.1.0
```

Перед завершением релиза проверьте версию, changelog и результаты сборки.

## 11. Частые проблемы

### Git Flow сообщает, что репозиторий не инициализирован

```text
Fatal: Not a gitflow-enabled repo yet
```

Выполните `git flow init` и используйте значения из первого раздела.

### GitHub отклоняет SSH-ключ

```text
Permission denied (publickey)
```

Проверьте подключение:

```bash
ssh -T git@github.com
```

В MSYS2 можно явно указать ключ из профиля Windows в `~/.ssh/config`:

```sshconfig
Host github.com
    HostName github.com
    User git
    IdentityFile /c/Users/Tema/.ssh/id_ed25519
    IdentitiesOnly yes
```

### MSYS2 не видит Windows-версию Node.js

Запускайте профиль UCRT64 с параметром `-use-full-path` или установите
Node.js непосредственно для UCRT64. Проверьте выбранные программы:

```bash
type -a node
type -a npm
node --version
npm --version
```

### Коммиты не появляются в changelog

Проверьте историю после последнего тега и повторно запустите генератор:

```bash
git log v1.0.0..HEAD --oneline
npm run changelog
```

Команда проекта использует параметр `-u`, поэтому новые `feat` и `fix`
должны появляться в разделе `Unreleased`.
