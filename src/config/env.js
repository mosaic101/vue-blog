/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   env.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/08/07 22:15:55 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/08/07 22:56:12 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let BASE_URL = '' // ip address

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://localhost:4000/api'
}
else {
  BASE_URL = 'http://www.jianjin.com'
}

export {
  BASE_URL
}
