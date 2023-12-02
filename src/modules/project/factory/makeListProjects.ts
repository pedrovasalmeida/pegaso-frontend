/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { cmsClient } from "../../../services/cmsClient"

export interface EnterpriseProps {
  development: {
    id: number;
    nome: string;
    descricao_curta: string;
    descricao: string;
    endereco: string;
    banner: string;
    poster: string;
  };
  images: string[];
}

function parseProject(data: any): EnterpriseProps {
  return {
    development: {
      id: data.uid,
      nome: data.data.nome[0].text,
      descricao_curta: data.data.descricao_curta[0].text,
      descricao: data.data.descricao_longa[0].text,
      endereco: data.data.endereco[0].text,
      banner: data.data.poster.url,
      poster: data.data.poster.url,
    },
    images: data.data.imagens.map(img => img.image.url)
    }
}

export async function makeListProjects(): Promise<EnterpriseProps[] | null> {
  try {
    const requestToGetRef = await cmsClient.get('/')
    console.log({ requestToGetRef })
    const usableRef = requestToGetRef.data.refs[0].ref
    console.log({ usableRef })
    const projects = await cmsClient.get(`/documents/search?ref=${usableRef}`)
    const parsedProjects = projects.data.results.filter(p => p.type === 'empreendimento').map(p => parseProject(p))
    console.log({ projects, parsedProjects })
    return parsedProjects
  } catch {
    return null
  }
}

export async function makeListHomeImages(): Promise<string[] | null> {
  try {
    const requestToGetRef = await cmsClient.get('/')
    const usableRef = requestToGetRef.data.refs[0].ref
    const images = await cmsClient.get(`/documents/search?ref=${usableRef}`)
    const parsedImages = images.data.results.filter(p => p.type === 'site-image').map(p => p.data.imagens_pagina_inicial.map(img => img.imagem.url)).flat()
    return parsedImages
  } catch {
    return null
  }
}