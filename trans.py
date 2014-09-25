#! /usr/bin/env python2.7
# coding:utf-8

import urllib
import json
import sys

import log

def translate(data) :
    data = urllib.quote_plus(data.strip())
    data = data.replace('+', ' ')
    
    url = 'http://fanyi.youdao.com/openapi.do?keyfrom=welcome-to-NZ&key=408818637&type=data&doctype=json&version=1.1&q=' + data

    html_get = urllib.urlopen(url)
    jdata = json.loads(html_get.read())

    #return a unicode string list
    try:
        return jdata['basic']['explains'], jdata['basic']['phonetic']
    except Exception, e:
        try:
            return jdata['translation'], None
        except:
            return None

def show_translation_result(query):
    res = translate(query)
    if not res:
        print('Can not find this word')
        return
        
    exp,ph = res
    if not isinstance(exp, list):
        print('Can not find this word')
        return

    for i in exp:
        print i.encode('utf-8')

    if ph:
        print '发音 ', ph.encode('utf-8')

if __name__ == '__main__':
    data = ' '.join(sys.argv[1:])
    show_translation_result(data)
    '''
    log.warn('tt')
    loger = log.getLogger('test')
    loger.info('info')
    log2 = log.getLogger('kk')
    log2.error('ihh')
    '''
