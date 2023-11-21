import fs, { PathLike } from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')
const contentDirectory = join(process.cwd(), '_content')
const postsDirectory = join(process.cwd(), '_posts')

export const getPostsSlugs = () => {
    return fs.readdirSync(postsDirectory)
}

export const getProjectsSlugs = () => {
    return fs.readdirSync(projectsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if(field == 'slug'){
            items[field] = realSlug
        }

        if(field == 'content'){
            items[field] = content
        }

        if(typeof data[field] != 'undefined'){
            items[field] = data[field]
        }
    })

    return items
}

export const getProjectBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(projectsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if(field == 'slug'){
            items[field] = realSlug
        }

        if(field == 'content'){
            items[field] = content
        }

        if(typeof data[field] != 'undefined'){
            items[field] = data[field]
        }
    })

    return items
}

export const getAllPosts = (fields: string[] = []) => {
    const slugs = getPostsSlugs()

    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort projects by date in descending ordeer
        .sort((post1, post2) => (Date.parse(post1.started) > Date.parse(post2.started) ? -1 : 1))
    return posts
}

export const getAllProjects = (fields: string[] = []) => {
    const slugs = getProjectsSlugs()
    const projects = slugs
        .map((slug) => getProjectBySlug(slug, fields))
        // sort projects by date in descending ordeer
        .sort((project1, project2) => (Date.parse(project1.started) > Date.parse(project2.started) ? -1 : 1))
    return projects
}

export const getPageContentBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(contentDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if(field == 'slug'){
            items[field] = realSlug
        }

        if(field == 'content'){
            items[field] = content
        }

        if(typeof data[field] != 'undefined'){
            items[field] = data[field]
        }
    })

    return items
}